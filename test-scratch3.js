class ScratchSensor {
    getInfo() {
        return {
            "id": "NitroBlockAAA",
            "name": "NitroBlockAAA",
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
