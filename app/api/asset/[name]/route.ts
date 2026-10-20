import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ name: string }> }
) {
  const { name } = await params;

  // Sanitize name to prevent path traversal
  const safeName = path.basename(name);
  const filePath = path.join(process.cwd(), 'stitch_baby_feeder_storefront_ui', 'Images', safeName);

  if (!fs.existsSync(filePath)) {
    return new NextResponse('Asset not found', { status: 404 });
  }

  const stat = fs.statSync(filePath);
  const fileSize = stat.size;
  const range = request.headers.get('range');

  let contentType = 'application/octet-stream';
  if (safeName.endsWith('.jpeg') || safeName.endsWith('.jpg')) {
    contentType = 'image/jpeg';
  } else if (safeName.endsWith('.mp4')) {
    contentType = 'video/mp4';
  } else if (safeName.endsWith('.png')) {
    contentType = 'image/png';
  }

  try {
    // Handle Range requests for video streaming with buffer subarray (robust & synchronous)
    if (range && safeName.endsWith('.mp4')) {
      const parts = range.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

      if (isNaN(start) || isNaN(end) || start >= fileSize || end >= fileSize) {
        return new NextResponse('Range Not Satisfiable', {
          status: 416,
          headers: {
            'Content-Range': `bytes */${fileSize}`,
          },
        });
      }

      const chunksize = (end - start) + 1;
      const fileBuffer = fs.readFileSync(filePath);
      const chunk = fileBuffer.subarray(start, end + 1);

      return new NextResponse(chunk, {
        status: 206,
        headers: {
          'Content-Range': `bytes ${start}-${end}/${fileSize}`,
          'Accept-Ranges': 'bytes',
          'Content-Length': chunksize.toString(),
          'Content-Type': contentType,
        },
      });
    }

    const fileBuffer = fs.readFileSync(filePath);
    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Content-Length': fileSize.toString(),
        'Accept-Ranges': 'bytes',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (err) {
    console.error('Asset serving error:', err);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
