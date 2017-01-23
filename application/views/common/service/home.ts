

export function getHomeInfo(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Welcome to async world!!!');
        }, 200);
    });
}
