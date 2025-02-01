export async function GET() {
    const robotsTxt = `
User-agent: *
Allow: /

Sitemap: https://www.raevdesign.com/sitemap.xml
    `;

    return new Response(robotsTxt, {
        headers: {
            "Content-Type": "text/plain"
        }
    });
}
