//Below is a series of nested objects and arrays-of-objects depicting a house.
//Review the structure and then answer the questions.

'use strict';

var house = {
  rooms: [
    {
      Name: 'Kitchen',
      Purpose: 'Eating',
      MajorAppliances: ['Stove', 'Fridge', 'Microwave', 'Dishwasher'],
      MinorAppliances: ['Mixer', 'Can Opener', 'Toaster Oven'],
      MinorElectronics: ['Oven Thermometer'],
      Cabinets: 27,
      Lighting: [{
                  Type: 'Fixture',
                  Kind: 'Hanging',
                  Bulbs: 1,
                  Wattage: [60]
                }],
    },
    {
      Name: 'Living Room',
      Purpose: 'Misc',
      MajorElectronics: ['TV'],
      MinorElectronics: ['Blu-Ray Player', 'Router', 'Sound Bar', 'Modem' ],
      Cabinets: 0,
      Lighting: [{
                  Type: 'Fixture',
                  Kind: 'Ceiling Fan',
                  Bulbs: 4,
                  BulbWattage: [40, 40, 40, 80]
                },
                {
                  Type: 'Lamp',
                  Kind: 'Floor',
                  Bulbs: 1,
                  Wattage: [60]
                },
                {
                  Type: 'Lamp',
                  Kind: 'Table',
                  Bulbs: 1,
                  Wattage: [40]
                }]
    },
    {
      Name: 'Bathroom',
      Purpose: 'Other',
      Cabinets: 2,
      Lighting: [{
                  Type: 'Fixture',
                  Kind: 'Ceiling Light',
                  Bulbs: 3,
                  Wattage: [25]
                }]
    }
  ],
  yard: false,
  garage: false,
};

// This has been written to return some fairly readable output.
// That means it's probably causing issues in your linter right with its' incomplete console.log statements.
// Get rid of the errors by replacing the YOUR ANSWER HERE statements with your answers.

// This house is apparently just a small studio.
    // How many rooms are there?
    console.log('There are ' + /*YOUR ANSWER HERE*/ + ' rooms in this house.');
    console.log('-----');


// The Painter needs to repaint the bathroom cabinets.
    // How many are there?
    console.log('There are ' + /*YOUR ANSWER HERE*/ + ' bathroom cabinets.');
    console.log('-----');


// Grandma wants to spoil the family and buy all new minor appliances for the kitchen.
    // What appliances will she buy?
    console.log('She will buy the following appliances: ' + /*YOUR ANSWER HERE*/ + '.');
    console.log('-----');

    // How many items is that?
    console.log('That\'s a total of ' + /*YOUR ANSWER HERE*/ + ' appliances.');
    console.log('-----');


// The A/V Guy is going to re-congfigure all the electronics in the living room.
    // What items will he have to move?
    console.log('He will have to move the following items: ' + /*YOUR ANSWER HERE*/);
    console.log('-----');


// BONUS!!!
// The Housekeeper needs to change all the lightbulbs.

    // How many bulbs will she need?

    console.log('She will need ' + /*YOUR ANSWER HERE*/ + ' lightbulbs.');
    console.log('-----');

    // List the different wattages she will need:

    console.log('She will need the following wattages: ' /*YOUR ANSWER HERE*/);
    console.log('-----');


// Is there anything else you want to know about the house?
    // Write your questions here:

    // Log your answers here:
    console.log(/*YOUR ANSWERS HERE*/);
    console.log('-----');


// The End
console.log('----------The End----------');
//Created by Gabe Thexton - Updated May 6, 2016
// The Actual End
