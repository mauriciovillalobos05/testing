export function compileCode(code:string): string | Error {
    if (code === ''){
        throw new Error('cannot compile empty string');
    }

    return code;
}