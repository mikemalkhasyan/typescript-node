export default class Messnger {
    port: number;

    constructor(port) {
        this.port = port;

    }

    messagePrint() {
        return `Node and express server is running on port ${this.port}`
    }

}

// namespace Messengerspace {
//     export class Messnger {
//         port: number;
//
//         constructor(port) {
//             this.port = port;
//         }
//
//         messagePrint() {
//             return `Node and express server is running on port ${this.port}`
//         }
//     }
// }