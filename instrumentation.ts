// @ts-expect-error: No types available for '@middleware.io/agent-apm-nextjs'
import tracker from '@middleware.io/agent-apm-nextjs';

export function register() {
    tracker.track({
        serviceName: "wrkm-nextjs",
        accessToken: process.env.MW_ACCESS_TOKEN || '',
        enableExceptionHandling: true, // Enable advanced exception handling
        target: "vercel",
        customResourceAttributes: {
            "app.version": "0.0.1"
        }
    });
}