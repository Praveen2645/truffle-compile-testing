// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

contract Maths{
    function add(uint a, uint b) public pure returns(uint){
        return a+b;
    }

    function sub(uint x, uint y) public pure returns(uint){
        return x-y;
    }
}