// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@thirdweb-dev/contracts/extension/Staking721.sol";

contract ClownStaking is Staking721 {
    constructor(
        address _nftCollection,
        address _rewardToken
    ) Staking721(_nftCollection, _rewardToken) {}
}
