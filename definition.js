Blockly.Blocks['touchpad_create'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "touchpad_create",
        "message0": Blockly.Msg.TOUCHPAD_CREATE_MESSAGE0,
        "args0": [
          {
            "type": "field_variable",
            "name": "touchpad",
            "variable": Blockly.Msg.TOUCHPAD_CREATE_MESSAGE1,
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#e63022",
        "tooltip": Blockly.Msg.TOUCHPAD_CREATE_TOOLTIP,
        "helpUrl": Blockly.Msg.TOUCHPAD_CREATE_HELPURL
      }
    );
  }
};

Blockly.Python['touchpad_create'] = function(block) {
  var variable_touchpad = Blockly.Python.variableDB_.getName(block.getFieldValue('touchpad'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  Blockly.Python.definitions_['import_i2c'] = 'from machine import Pin, I2C';
  Blockly.Python.definitions_['import_mpr121'] = 'from mpr121 import MPR121';
  // touch_pad = MPR121(i2c, 0x5A)
  var code = variable_touchpad + ' = MPR121(I2C(-1, scl=Pin(22), sda=Pin(21)))\n';
  return code;
};

Blockly.Blocks['touchpad_istouch'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "touchpad_istouch",
        "message0": Blockly.Msg.TOUCHPAD_ISTOUCHED_MESSAGE0,
        "args0": [
          {
            "type": "field_variable",
            "name": "touchpad",
            "variable": Blockly.Msg.TOUCHPAD_CREATE_MESSAGE1,
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_value",
            "name": "TEXT"
          }
        ],
        "output": "Boolean",
        "colour": "#e63022",
        "tooltip": Blockly.Msg.TOUCHPAD_ISTOUCHED_TOOLTIP,
        "helpUrl": Blockly.Msg.TOUCHPAD_ISTOUCHED_HELPURL
      }
    );
  }
};

Blockly.Python['touchpad_istouch'] = function(block) {
  var variable_touchpad = Blockly.Python.variableDB_.getName(block.getFieldValue('touchpad'), Blockly.Variables.NAME_TYPE);
  var value_text = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  // TODO: Change ORDER_NONE to the correct strength.
  // mpr.is_touched(key)
  var code = variable_touchpad + '.is_touched(' + value_text + ')';
  return [code, Blockly.Python.ORDER_NONE];
};