//SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

contract Box{

    uint256 private s_var;

    
    function setVar(uint256 newValue) public {
        s_var = newValue;
    }
    function getVar()public view returns(uint256){
        return s_var;
    }
    function getVersion() public pure returns(uint256){
        return 1;
    }
}