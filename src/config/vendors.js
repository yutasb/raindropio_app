const vendors = {}

if (process.env.SENTRY_RELEASE)
    vendors.sentry = {
        dsn: 'https://c647a147102b4de68dd9dd8690e06840@o199199.ingest.sentry.io/5264532'
    }

export default vendors