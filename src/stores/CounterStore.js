export function CounterStore() {

    return {
        count: 0,
        increment() {
            this.count++
        },
        decrement() {
            this.count--
        },
        get doubleCount() {
            return this.count * 2
        }
    };

}