import { NextRequest } from 'next/server';
import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'experimental-edge',
};

export default function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const hasTitle = searchParams.has('title');
    const hasDescription = searchParams.has('description');

    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'Overview';
    const description = hasDescription
      ? searchParams.get('description')?.slice(0, 100)
      : 'All you need to start documenting your project...';

    return new ImageResponse(
      (
        <div tw="relative w-full h-full flex flex-col justify-center bg-white">
          <div tw="flex flex-col px-24">
            <h1 tw="text-4xl text-slate-900 mb-10">Galaxy template</h1>
            <span tw="bg-blue-50 px-2 py-1 rounded text-sm text-blue-600">
              {title}
            </span>

            <h2 tw="font-normal text-3xl text-slate-600">{description}</h2>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
