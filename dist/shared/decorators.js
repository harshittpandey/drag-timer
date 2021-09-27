// autobind decorator
function autobind(_, _2, descriptor) {
    // console.log(target, methodName)
    const originalMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}
export { autobind };
