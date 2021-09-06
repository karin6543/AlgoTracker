let name = document.getElementById('nameInput')

let button = document.getElementById('btn')

button.addEventListener('click',function(){
    console.log(name.value)
})

'use strict';

// Require process, so we can mock environment variables.
const process = require('process');

const express = require('express');
const Knex = require('knex');

