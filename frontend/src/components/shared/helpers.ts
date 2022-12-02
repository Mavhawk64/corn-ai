export const fetcher = async function (url: string, args: any = {}) {
    args = {
        ...{raw: false},
        ...args
    };
    const request = await fetch(url, {
        ...args,
        headers: {
            'Content-Type': 'application/json',
            ...args.headers,
        },
        body:  args.body,
    });

    if (args.raw) {
        return await request.blob();
    } else {
        return await request.json();
    }
}