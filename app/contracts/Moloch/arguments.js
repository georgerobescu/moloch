const fs = require("fs")
let foundersAddresses = [
  "0x2a906694d15df38f59e76ed3a5735f8aabcce9cb"
]
let foundersVotingShares = [
  100
]
let periodDuration = 86400 //default 86400
let votingPeriodLength = 7 //default 7
let gracePeriodLength = 7 //default 7
let proposalDeposit = 1 //default 5k in ETH
module.exports = [
  fs.readFileSync("contracts/GuildBank/GuildBank.address").toString().trim(),
  foundersAddresses,
  foundersVotingShares,
  periodDuration,
  votingPeriodLength,
  gracePeriodLength,
  proposalDeposit
]
