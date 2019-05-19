/* Extension for Scratch Sensor 2.0 */
/* beta for Scratch 3 */
/* under development please do not use */
/* (c) Emant Pte Ltd 19 May 2019 */

class ScratchSensor {
    getInfo() {
        return {
            "id": "ScratchSensor",
            "name": "Scratch Sensor",
            "blocks": [{
                    "opcode": "substringy",
                    "blockType": "reporter",
                    "text": "letters [num1] through [num2] of [string]",
                    "arguments": {
                        "num1": {
                            "type": "number",
                            "defaultValue": "5"
                        },
                        "num2": {
                            "type": "number",
                            "defaultValue": "9"
                        },
                        "string": {
                            "type": "string",
                            "defaultValue": "Scratch Sensor"
                        }
                    }
            }],
        "menus": { //we will get back to this in a later tutorial
        }
    };
    }
    substringy({num1, num2, string}) {
        return string.substring(num1 - 1, num2);
    };
}
Scratch.extensions.register(new ScratchSensor());
