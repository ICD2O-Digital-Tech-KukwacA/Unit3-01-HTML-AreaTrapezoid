// Copyright (c) 2022 Ms Raffin All rights reserved
//
// Created by: Kukwac
// Created on: March 2022
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates area of the trapezoid.
 */
function calculate() {
  // input
    let base1 = parseFloat(document.getElementById('base1').value);
    let base2 = parseFloat(document.getElementById('base2').value);
    let height = parseFloat(document.getElementById('height').value);

  // process
    let area = (base1 + base2) /2 * height;

  // output
    document.getElementById('area').innerHTML = 'Area is: ' + area.toFixed(1) + ' cm²'
}
