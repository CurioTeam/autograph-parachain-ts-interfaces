import '@polkadot/types/lookup';
import type { BTreeMap, BTreeSet, Bytes, Compact, Enum, Null, Option, Result, Struct, Text, U256, U8aFixed, Vec, bool, i64, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { Vote } from '@polkadot/types/interfaces/elections';
import type { AccountId32, Call, H160, H256, MultiAddress, Perbill, Permill, Perquintill } from '@polkadot/types/interfaces/runtime';
import type { Event } from '@polkadot/types/interfaces/system';
declare module '@polkadot/types/lookup' {
    /** @name FrameSystemAccountInfo (3) */
    interface FrameSystemAccountInfo extends Struct {
        readonly nonce: u64;
        readonly consumers: u32;
        readonly providers: u32;
        readonly sufficients: u32;
        readonly data: PalletBalancesAccountData;
    }
    /** @name PalletBalancesAccountData (5) */
    interface PalletBalancesAccountData extends Struct {
        readonly free: u128;
        readonly reserved: u128;
        readonly frozen: u128;
        readonly flags: u128;
    }
    /** @name FrameSupportDispatchPerDispatchClassWeight (9) */
    interface FrameSupportDispatchPerDispatchClassWeight extends Struct {
        readonly normal: SpWeightsWeightV2Weight;
        readonly operational: SpWeightsWeightV2Weight;
        readonly mandatory: SpWeightsWeightV2Weight;
    }
    /** @name SpWeightsWeightV2Weight (10) */
    interface SpWeightsWeightV2Weight extends Struct {
        readonly refTime: Compact<u64>;
        readonly proofSize: Compact<u64>;
    }
    /** @name SpRuntimeDigest (14) */
    interface SpRuntimeDigest extends Struct {
        readonly logs: Vec<SpRuntimeDigestDigestItem>;
    }
    /** @name SpRuntimeDigestDigestItem (16) */
    interface SpRuntimeDigestDigestItem extends Enum {
        readonly isOther: boolean;
        readonly asOther: Bytes;
        readonly isConsensus: boolean;
        readonly asConsensus: ITuple<[U8aFixed, Bytes]>;
        readonly isSeal: boolean;
        readonly asSeal: ITuple<[U8aFixed, Bytes]>;
        readonly isPreRuntime: boolean;
        readonly asPreRuntime: ITuple<[U8aFixed, Bytes]>;
        readonly isRuntimeEnvironmentUpdated: boolean;
        readonly type: 'Other' | 'Consensus' | 'Seal' | 'PreRuntime' | 'RuntimeEnvironmentUpdated';
    }
    /** @name FrameSystemEventRecord (19) */
    interface FrameSystemEventRecord extends Struct {
        readonly phase: FrameSystemPhase;
        readonly event: Event;
        readonly topics: Vec<H256>;
    }
    /** @name FrameSystemEvent (21) */
    interface FrameSystemEvent extends Enum {
        readonly isExtrinsicSuccess: boolean;
        readonly asExtrinsicSuccess: {
            readonly dispatchInfo: FrameSupportDispatchDispatchInfo;
        } & Struct;
        readonly isExtrinsicFailed: boolean;
        readonly asExtrinsicFailed: {
            readonly dispatchError: SpRuntimeDispatchError;
            readonly dispatchInfo: FrameSupportDispatchDispatchInfo;
        } & Struct;
        readonly isCodeUpdated: boolean;
        readonly isNewAccount: boolean;
        readonly asNewAccount: {
            readonly account: AccountId32;
        } & Struct;
        readonly isKilledAccount: boolean;
        readonly asKilledAccount: {
            readonly account: AccountId32;
        } & Struct;
        readonly isRemarked: boolean;
        readonly asRemarked: {
            readonly sender: AccountId32;
            readonly hash_: H256;
        } & Struct;
        readonly type: 'ExtrinsicSuccess' | 'ExtrinsicFailed' | 'CodeUpdated' | 'NewAccount' | 'KilledAccount' | 'Remarked';
    }
    /** @name FrameSupportDispatchDispatchInfo (22) */
    interface FrameSupportDispatchDispatchInfo extends Struct {
        readonly weight: SpWeightsWeightV2Weight;
        readonly class: FrameSupportDispatchDispatchClass;
        readonly paysFee: FrameSupportDispatchPays;
    }
    /** @name FrameSupportDispatchDispatchClass (23) */
    interface FrameSupportDispatchDispatchClass extends Enum {
        readonly isNormal: boolean;
        readonly isOperational: boolean;
        readonly isMandatory: boolean;
        readonly type: 'Normal' | 'Operational' | 'Mandatory';
    }
    /** @name FrameSupportDispatchPays (24) */
    interface FrameSupportDispatchPays extends Enum {
        readonly isYes: boolean;
        readonly isNo: boolean;
        readonly type: 'Yes' | 'No';
    }
    /** @name SpRuntimeDispatchError (25) */
    interface SpRuntimeDispatchError extends Enum {
        readonly isOther: boolean;
        readonly isCannotLookup: boolean;
        readonly isBadOrigin: boolean;
        readonly isModule: boolean;
        readonly asModule: SpRuntimeModuleError;
        readonly isConsumerRemaining: boolean;
        readonly isNoProviders: boolean;
        readonly isTooManyConsumers: boolean;
        readonly isToken: boolean;
        readonly asToken: SpRuntimeTokenError;
        readonly isArithmetic: boolean;
        readonly asArithmetic: SpArithmeticArithmeticError;
        readonly isTransactional: boolean;
        readonly asTransactional: SpRuntimeTransactionalError;
        readonly isExhausted: boolean;
        readonly isCorruption: boolean;
        readonly isUnavailable: boolean;
        readonly isRootNotAllowed: boolean;
        readonly type: 'Other' | 'CannotLookup' | 'BadOrigin' | 'Module' | 'ConsumerRemaining' | 'NoProviders' | 'TooManyConsumers' | 'Token' | 'Arithmetic' | 'Transactional' | 'Exhausted' | 'Corruption' | 'Unavailable' | 'RootNotAllowed';
    }
    /** @name SpRuntimeModuleError (26) */
    interface SpRuntimeModuleError extends Struct {
        readonly index: u8;
        readonly error: U8aFixed;
    }
    /** @name SpRuntimeTokenError (27) */
    interface SpRuntimeTokenError extends Enum {
        readonly isFundsUnavailable: boolean;
        readonly isOnlyProvider: boolean;
        readonly isBelowMinimum: boolean;
        readonly isCannotCreate: boolean;
        readonly isUnknownAsset: boolean;
        readonly isFrozen: boolean;
        readonly isUnsupported: boolean;
        readonly isCannotCreateHold: boolean;
        readonly isNotExpendable: boolean;
        readonly isBlocked: boolean;
        readonly type: 'FundsUnavailable' | 'OnlyProvider' | 'BelowMinimum' | 'CannotCreate' | 'UnknownAsset' | 'Frozen' | 'Unsupported' | 'CannotCreateHold' | 'NotExpendable' | 'Blocked';
    }
    /** @name SpArithmeticArithmeticError (28) */
    interface SpArithmeticArithmeticError extends Enum {
        readonly isUnderflow: boolean;
        readonly isOverflow: boolean;
        readonly isDivisionByZero: boolean;
        readonly type: 'Underflow' | 'Overflow' | 'DivisionByZero';
    }
    /** @name SpRuntimeTransactionalError (29) */
    interface SpRuntimeTransactionalError extends Enum {
        readonly isLimitReached: boolean;
        readonly isNoLayer: boolean;
        readonly type: 'LimitReached' | 'NoLayer';
    }
    /** @name CumulusPalletParachainSystemEvent (30) */
    interface CumulusPalletParachainSystemEvent extends Enum {
        readonly isValidationFunctionStored: boolean;
        readonly isValidationFunctionApplied: boolean;
        readonly asValidationFunctionApplied: {
            readonly relayChainBlockNum: u32;
        } & Struct;
        readonly isValidationFunctionDiscarded: boolean;
        readonly isUpgradeAuthorized: boolean;
        readonly asUpgradeAuthorized: {
            readonly codeHash: H256;
        } & Struct;
        readonly isDownwardMessagesReceived: boolean;
        readonly asDownwardMessagesReceived: {
            readonly count: u32;
        } & Struct;
        readonly isDownwardMessagesProcessed: boolean;
        readonly asDownwardMessagesProcessed: {
            readonly weightUsed: SpWeightsWeightV2Weight;
            readonly dmqHead: H256;
        } & Struct;
        readonly isUpwardMessageSent: boolean;
        readonly asUpwardMessageSent: {
            readonly messageHash: Option<U8aFixed>;
        } & Struct;
        readonly type: 'ValidationFunctionStored' | 'ValidationFunctionApplied' | 'ValidationFunctionDiscarded' | 'UpgradeAuthorized' | 'DownwardMessagesReceived' | 'DownwardMessagesProcessed' | 'UpwardMessageSent';
    }
    /** @name PalletBalancesEvent (32) */
    interface PalletBalancesEvent extends Enum {
        readonly isEndowed: boolean;
        readonly asEndowed: {
            readonly account: AccountId32;
            readonly freeBalance: u128;
        } & Struct;
        readonly isDustLost: boolean;
        readonly asDustLost: {
            readonly account: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isTransfer: boolean;
        readonly asTransfer: {
            readonly from: AccountId32;
            readonly to: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isBalanceSet: boolean;
        readonly asBalanceSet: {
            readonly who: AccountId32;
            readonly free: u128;
        } & Struct;
        readonly isReserved: boolean;
        readonly asReserved: {
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isUnreserved: boolean;
        readonly asUnreserved: {
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isReserveRepatriated: boolean;
        readonly asReserveRepatriated: {
            readonly from: AccountId32;
            readonly to: AccountId32;
            readonly amount: u128;
            readonly destinationStatus: FrameSupportTokensMiscBalanceStatus;
        } & Struct;
        readonly isDeposit: boolean;
        readonly asDeposit: {
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isWithdraw: boolean;
        readonly asWithdraw: {
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isSlashed: boolean;
        readonly asSlashed: {
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isMinted: boolean;
        readonly asMinted: {
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isBurned: boolean;
        readonly asBurned: {
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isSuspended: boolean;
        readonly asSuspended: {
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isRestored: boolean;
        readonly asRestored: {
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isUpgraded: boolean;
        readonly asUpgraded: {
            readonly who: AccountId32;
        } & Struct;
        readonly isIssued: boolean;
        readonly asIssued: {
            readonly amount: u128;
        } & Struct;
        readonly isRescinded: boolean;
        readonly asRescinded: {
            readonly amount: u128;
        } & Struct;
        readonly isLocked: boolean;
        readonly asLocked: {
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isUnlocked: boolean;
        readonly asUnlocked: {
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isFrozen: boolean;
        readonly asFrozen: {
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isThawed: boolean;
        readonly asThawed: {
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly type: 'Endowed' | 'DustLost' | 'Transfer' | 'BalanceSet' | 'Reserved' | 'Unreserved' | 'ReserveRepatriated' | 'Deposit' | 'Withdraw' | 'Slashed' | 'Minted' | 'Burned' | 'Suspended' | 'Restored' | 'Upgraded' | 'Issued' | 'Rescinded' | 'Locked' | 'Unlocked' | 'Frozen' | 'Thawed';
    }
    /** @name FrameSupportTokensMiscBalanceStatus (33) */
    interface FrameSupportTokensMiscBalanceStatus extends Enum {
        readonly isFree: boolean;
        readonly isReserved: boolean;
        readonly type: 'Free' | 'Reserved';
    }
    /** @name PalletBountiesEvent (34) */
    interface PalletBountiesEvent extends Enum {
        readonly isBountyProposed: boolean;
        readonly asBountyProposed: {
            readonly index: u32;
        } & Struct;
        readonly isBountyRejected: boolean;
        readonly asBountyRejected: {
            readonly index: u32;
            readonly bond: u128;
        } & Struct;
        readonly isBountyBecameActive: boolean;
        readonly asBountyBecameActive: {
            readonly index: u32;
        } & Struct;
        readonly isBountyAwarded: boolean;
        readonly asBountyAwarded: {
            readonly index: u32;
            readonly beneficiary: AccountId32;
        } & Struct;
        readonly isBountyClaimed: boolean;
        readonly asBountyClaimed: {
            readonly index: u32;
            readonly payout: u128;
            readonly beneficiary: AccountId32;
        } & Struct;
        readonly isBountyCanceled: boolean;
        readonly asBountyCanceled: {
            readonly index: u32;
        } & Struct;
        readonly isBountyExtended: boolean;
        readonly asBountyExtended: {
            readonly index: u32;
        } & Struct;
        readonly type: 'BountyProposed' | 'BountyRejected' | 'BountyBecameActive' | 'BountyAwarded' | 'BountyClaimed' | 'BountyCanceled' | 'BountyExtended';
    }
    /** @name PalletTransactionPaymentEvent (35) */
    interface PalletTransactionPaymentEvent extends Enum {
        readonly isTransactionFeePaid: boolean;
        readonly asTransactionFeePaid: {
            readonly who: AccountId32;
            readonly actualFee: u128;
            readonly tip: u128;
        } & Struct;
        readonly type: 'TransactionFeePaid';
    }
    /** @name PalletTreasuryEvent (36) */
    interface PalletTreasuryEvent extends Enum {
        readonly isProposed: boolean;
        readonly asProposed: {
            readonly proposalIndex: u32;
        } & Struct;
        readonly isSpending: boolean;
        readonly asSpending: {
            readonly budgetRemaining: u128;
        } & Struct;
        readonly isAwarded: boolean;
        readonly asAwarded: {
            readonly proposalIndex: u32;
            readonly award: u128;
            readonly account: AccountId32;
        } & Struct;
        readonly isRejected: boolean;
        readonly asRejected: {
            readonly proposalIndex: u32;
            readonly slashed: u128;
        } & Struct;
        readonly isBurnt: boolean;
        readonly asBurnt: {
            readonly burntFunds: u128;
        } & Struct;
        readonly isRollover: boolean;
        readonly asRollover: {
            readonly rolloverBalance: u128;
        } & Struct;
        readonly isDeposit: boolean;
        readonly asDeposit: {
            readonly value: u128;
        } & Struct;
        readonly isSpendApproved: boolean;
        readonly asSpendApproved: {
            readonly proposalIndex: u32;
            readonly amount: u128;
            readonly beneficiary: AccountId32;
        } & Struct;
        readonly isUpdatedInactive: boolean;
        readonly asUpdatedInactive: {
            readonly reactivated: u128;
            readonly deactivated: u128;
        } & Struct;
        readonly type: 'Proposed' | 'Spending' | 'Awarded' | 'Rejected' | 'Burnt' | 'Rollover' | 'Deposit' | 'SpendApproved' | 'UpdatedInactive';
    }
    /** @name PalletSessionEvent (37) */
    interface PalletSessionEvent extends Enum {
        readonly isNewSession: boolean;
        readonly asNewSession: {
            readonly sessionIndex: u32;
        } & Struct;
        readonly type: 'NewSession';
    }
    /** @name ParachainStakingEvent (38) */
    interface ParachainStakingEvent extends Enum {
        readonly isNewRound: boolean;
        readonly asNewRound: ITuple<[u64, u32]>;
        readonly isEnteredTopCandidates: boolean;
        readonly asEnteredTopCandidates: AccountId32;
        readonly isLeftTopCandidates: boolean;
        readonly asLeftTopCandidates: AccountId32;
        readonly isJoinedCollatorCandidates: boolean;
        readonly asJoinedCollatorCandidates: ITuple<[AccountId32, u128]>;
        readonly isCollatorStakedMore: boolean;
        readonly asCollatorStakedMore: ITuple<[AccountId32, u128, u128]>;
        readonly isCollatorStakedLess: boolean;
        readonly asCollatorStakedLess: ITuple<[AccountId32, u128, u128]>;
        readonly isCollatorScheduledExit: boolean;
        readonly asCollatorScheduledExit: ITuple<[u32, AccountId32, u32]>;
        readonly isCollatorCanceledExit: boolean;
        readonly asCollatorCanceledExit: AccountId32;
        readonly isCandidateLeft: boolean;
        readonly asCandidateLeft: ITuple<[AccountId32, u128]>;
        readonly isCollatorRemoved: boolean;
        readonly asCollatorRemoved: ITuple<[AccountId32, u128]>;
        readonly isMaxCandidateStakeChanged: boolean;
        readonly asMaxCandidateStakeChanged: u128;
        readonly isDelegatorStakedMore: boolean;
        readonly asDelegatorStakedMore: ITuple<[AccountId32, AccountId32, u128, u128]>;
        readonly isDelegatorStakedLess: boolean;
        readonly asDelegatorStakedLess: ITuple<[AccountId32, AccountId32, u128, u128]>;
        readonly isDelegatorLeft: boolean;
        readonly asDelegatorLeft: ITuple<[AccountId32, u128]>;
        readonly isDelegation: boolean;
        readonly asDelegation: ITuple<[AccountId32, u128, AccountId32, u128]>;
        readonly isDelegationReplaced: boolean;
        readonly asDelegationReplaced: ITuple<[AccountId32, u128, AccountId32, u128, AccountId32, u128]>;
        readonly isDelegatorLeftCollator: boolean;
        readonly asDelegatorLeftCollator: ITuple<[AccountId32, AccountId32, u128, u128]>;
        readonly isRewarded: boolean;
        readonly asRewarded: ITuple<[AccountId32, u128]>;
        readonly isRoundInflationSet: boolean;
        readonly asRoundInflationSet: ITuple<[Perquintill, Perquintill, Perquintill, Perquintill]>;
        readonly isMaxSelectedCandidatesSet: boolean;
        readonly asMaxSelectedCandidatesSet: ITuple<[u32, u32]>;
        readonly isBlocksPerRoundSet: boolean;
        readonly asBlocksPerRoundSet: ITuple<[u32, u64, u64, u64]>;
        readonly type: 'NewRound' | 'EnteredTopCandidates' | 'LeftTopCandidates' | 'JoinedCollatorCandidates' | 'CollatorStakedMore' | 'CollatorStakedLess' | 'CollatorScheduledExit' | 'CollatorCanceledExit' | 'CandidateLeft' | 'CollatorRemoved' | 'MaxCandidateStakeChanged' | 'DelegatorStakedMore' | 'DelegatorStakedLess' | 'DelegatorLeft' | 'Delegation' | 'DelegationReplaced' | 'DelegatorLeftCollator' | 'Rewarded' | 'RoundInflationSet' | 'MaxSelectedCandidatesSet' | 'BlocksPerRoundSet';
    }
    /** @name PalletConvictionVotingEvent (40) */
    interface PalletConvictionVotingEvent extends Enum {
        readonly isDelegated: boolean;
        readonly asDelegated: ITuple<[AccountId32, AccountId32]>;
        readonly isUndelegated: boolean;
        readonly asUndelegated: AccountId32;
        readonly type: 'Delegated' | 'Undelegated';
    }
    /** @name PalletRankedCollectiveEvent (41) */
    interface PalletRankedCollectiveEvent extends Enum {
        readonly isMemberAdded: boolean;
        readonly asMemberAdded: {
            readonly who: AccountId32;
        } & Struct;
        readonly isRankChanged: boolean;
        readonly asRankChanged: {
            readonly who: AccountId32;
            readonly rank: u16;
        } & Struct;
        readonly isMemberRemoved: boolean;
        readonly asMemberRemoved: {
            readonly who: AccountId32;
            readonly rank: u16;
        } & Struct;
        readonly isVoted: boolean;
        readonly asVoted: {
            readonly who: AccountId32;
            readonly poll: u32;
            readonly vote: PalletRankedCollectiveVoteRecord;
            readonly tally: PalletRankedCollectiveTally;
        } & Struct;
        readonly type: 'MemberAdded' | 'RankChanged' | 'MemberRemoved' | 'Voted';
    }
    /** @name PalletRankedCollectiveVoteRecord (43) */
    interface PalletRankedCollectiveVoteRecord extends Enum {
        readonly isAye: boolean;
        readonly asAye: u32;
        readonly isNay: boolean;
        readonly asNay: u32;
        readonly type: 'Aye' | 'Nay';
    }
    /** @name PalletRankedCollectiveTally (44) */
    interface PalletRankedCollectiveTally extends Struct {
        readonly bareAyes: u32;
        readonly ayes: u32;
        readonly nays: u32;
    }
    /** @name PalletReferendaEvent (45) */
    interface PalletReferendaEvent extends Enum {
        readonly isSubmitted: boolean;
        readonly asSubmitted: {
            readonly index: u32;
            readonly track: u16;
            readonly proposal: FrameSupportPreimagesBounded;
        } & Struct;
        readonly isDecisionDepositPlaced: boolean;
        readonly asDecisionDepositPlaced: {
            readonly index: u32;
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isDecisionDepositRefunded: boolean;
        readonly asDecisionDepositRefunded: {
            readonly index: u32;
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isDepositSlashed: boolean;
        readonly asDepositSlashed: {
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isDecisionStarted: boolean;
        readonly asDecisionStarted: {
            readonly index: u32;
            readonly track: u16;
            readonly proposal: FrameSupportPreimagesBounded;
            readonly tally: PalletRankedCollectiveTally;
        } & Struct;
        readonly isConfirmStarted: boolean;
        readonly asConfirmStarted: {
            readonly index: u32;
        } & Struct;
        readonly isConfirmAborted: boolean;
        readonly asConfirmAborted: {
            readonly index: u32;
        } & Struct;
        readonly isConfirmed: boolean;
        readonly asConfirmed: {
            readonly index: u32;
            readonly tally: PalletRankedCollectiveTally;
        } & Struct;
        readonly isApproved: boolean;
        readonly asApproved: {
            readonly index: u32;
        } & Struct;
        readonly isRejected: boolean;
        readonly asRejected: {
            readonly index: u32;
            readonly tally: PalletRankedCollectiveTally;
        } & Struct;
        readonly isTimedOut: boolean;
        readonly asTimedOut: {
            readonly index: u32;
            readonly tally: PalletRankedCollectiveTally;
        } & Struct;
        readonly isCancelled: boolean;
        readonly asCancelled: {
            readonly index: u32;
            readonly tally: PalletRankedCollectiveTally;
        } & Struct;
        readonly isKilled: boolean;
        readonly asKilled: {
            readonly index: u32;
            readonly tally: PalletRankedCollectiveTally;
        } & Struct;
        readonly isSubmissionDepositRefunded: boolean;
        readonly asSubmissionDepositRefunded: {
            readonly index: u32;
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isMetadataSet: boolean;
        readonly asMetadataSet: {
            readonly index: u32;
            readonly hash_: H256;
        } & Struct;
        readonly isMetadataCleared: boolean;
        readonly asMetadataCleared: {
            readonly index: u32;
            readonly hash_: H256;
        } & Struct;
        readonly type: 'Submitted' | 'DecisionDepositPlaced' | 'DecisionDepositRefunded' | 'DepositSlashed' | 'DecisionStarted' | 'ConfirmStarted' | 'ConfirmAborted' | 'Confirmed' | 'Approved' | 'Rejected' | 'TimedOut' | 'Cancelled' | 'Killed' | 'SubmissionDepositRefunded' | 'MetadataSet' | 'MetadataCleared';
    }
    /** @name FrameSupportPreimagesBounded (46) */
    interface FrameSupportPreimagesBounded extends Enum {
        readonly isLegacy: boolean;
        readonly asLegacy: {
            readonly hash_: H256;
        } & Struct;
        readonly isInline: boolean;
        readonly asInline: Bytes;
        readonly isLookup: boolean;
        readonly asLookup: {
            readonly hash_: H256;
            readonly len: u32;
        } & Struct;
        readonly type: 'Legacy' | 'Inline' | 'Lookup';
    }
    /** @name FrameSystemCall (48) */
    interface FrameSystemCall extends Enum {
        readonly isRemark: boolean;
        readonly asRemark: {
            readonly remark: Bytes;
        } & Struct;
        readonly isSetHeapPages: boolean;
        readonly asSetHeapPages: {
            readonly pages: u64;
        } & Struct;
        readonly isSetCode: boolean;
        readonly asSetCode: {
            readonly code: Bytes;
        } & Struct;
        readonly isSetCodeWithoutChecks: boolean;
        readonly asSetCodeWithoutChecks: {
            readonly code: Bytes;
        } & Struct;
        readonly isSetStorage: boolean;
        readonly asSetStorage: {
            readonly items: Vec<ITuple<[Bytes, Bytes]>>;
        } & Struct;
        readonly isKillStorage: boolean;
        readonly asKillStorage: {
            readonly keys_: Vec<Bytes>;
        } & Struct;
        readonly isKillPrefix: boolean;
        readonly asKillPrefix: {
            readonly prefix: Bytes;
            readonly subkeys: u32;
        } & Struct;
        readonly isRemarkWithEvent: boolean;
        readonly asRemarkWithEvent: {
            readonly remark: Bytes;
        } & Struct;
        readonly type: 'Remark' | 'SetHeapPages' | 'SetCode' | 'SetCodeWithoutChecks' | 'SetStorage' | 'KillStorage' | 'KillPrefix' | 'RemarkWithEvent';
    }
    /** @name CumulusPalletParachainSystemCall (52) */
    interface CumulusPalletParachainSystemCall extends Enum {
        readonly isSetValidationData: boolean;
        readonly asSetValidationData: {
            readonly data: CumulusPrimitivesParachainInherentParachainInherentData;
        } & Struct;
        readonly isSudoSendUpwardMessage: boolean;
        readonly asSudoSendUpwardMessage: {
            readonly message: Bytes;
        } & Struct;
        readonly isAuthorizeUpgrade: boolean;
        readonly asAuthorizeUpgrade: {
            readonly codeHash: H256;
            readonly checkVersion: bool;
        } & Struct;
        readonly isEnactAuthorizedUpgrade: boolean;
        readonly asEnactAuthorizedUpgrade: {
            readonly code: Bytes;
        } & Struct;
        readonly type: 'SetValidationData' | 'SudoSendUpwardMessage' | 'AuthorizeUpgrade' | 'EnactAuthorizedUpgrade';
    }
    /** @name CumulusPrimitivesParachainInherentParachainInherentData (53) */
    interface CumulusPrimitivesParachainInherentParachainInherentData extends Struct {
        readonly validationData: PolkadotPrimitivesV5PersistedValidationData;
        readonly relayChainState: SpTrieStorageProof;
        readonly downwardMessages: Vec<PolkadotCorePrimitivesInboundDownwardMessage>;
        readonly horizontalMessages: BTreeMap<u32, Vec<PolkadotCorePrimitivesInboundHrmpMessage>>;
    }
    /** @name PolkadotPrimitivesV5PersistedValidationData (54) */
    interface PolkadotPrimitivesV5PersistedValidationData extends Struct {
        readonly parentHead: Bytes;
        readonly relayParentNumber: u32;
        readonly relayParentStorageRoot: H256;
        readonly maxPovSize: u32;
    }
    /** @name SpTrieStorageProof (56) */
    interface SpTrieStorageProof extends Struct {
        readonly trieNodes: BTreeSet<Bytes>;
    }
    /** @name PolkadotCorePrimitivesInboundDownwardMessage (59) */
    interface PolkadotCorePrimitivesInboundDownwardMessage extends Struct {
        readonly sentAt: u32;
        readonly msg: Bytes;
    }
    /** @name PolkadotCorePrimitivesInboundHrmpMessage (63) */
    interface PolkadotCorePrimitivesInboundHrmpMessage extends Struct {
        readonly sentAt: u32;
        readonly data: Bytes;
    }
    /** @name PalletTimestampCall (67) */
    interface PalletTimestampCall extends Enum {
        readonly isSet: boolean;
        readonly asSet: {
            readonly now: Compact<u64>;
        } & Struct;
        readonly type: 'Set';
    }
    /** @name ParachainInfoCall (68) */
    type ParachainInfoCall = Null;
    /** @name PalletBalancesCall (69) */
    interface PalletBalancesCall extends Enum {
        readonly isTransferAllowDeath: boolean;
        readonly asTransferAllowDeath: {
            readonly dest: MultiAddress;
            readonly value: Compact<u128>;
        } & Struct;
        readonly isSetBalanceDeprecated: boolean;
        readonly asSetBalanceDeprecated: {
            readonly who: MultiAddress;
            readonly newFree: Compact<u128>;
            readonly oldReserved: Compact<u128>;
        } & Struct;
        readonly isForceTransfer: boolean;
        readonly asForceTransfer: {
            readonly source: MultiAddress;
            readonly dest: MultiAddress;
            readonly value: Compact<u128>;
        } & Struct;
        readonly isTransferKeepAlive: boolean;
        readonly asTransferKeepAlive: {
            readonly dest: MultiAddress;
            readonly value: Compact<u128>;
        } & Struct;
        readonly isTransferAll: boolean;
        readonly asTransferAll: {
            readonly dest: MultiAddress;
            readonly keepAlive: bool;
        } & Struct;
        readonly isForceUnreserve: boolean;
        readonly asForceUnreserve: {
            readonly who: MultiAddress;
            readonly amount: u128;
        } & Struct;
        readonly isUpgradeAccounts: boolean;
        readonly asUpgradeAccounts: {
            readonly who: Vec<AccountId32>;
        } & Struct;
        readonly isTransfer: boolean;
        readonly asTransfer: {
            readonly dest: MultiAddress;
            readonly value: Compact<u128>;
        } & Struct;
        readonly isForceSetBalance: boolean;
        readonly asForceSetBalance: {
            readonly who: MultiAddress;
            readonly newFree: Compact<u128>;
        } & Struct;
        readonly type: 'TransferAllowDeath' | 'SetBalanceDeprecated' | 'ForceTransfer' | 'TransferKeepAlive' | 'TransferAll' | 'ForceUnreserve' | 'UpgradeAccounts' | 'Transfer' | 'ForceSetBalance';
    }
    /** @name PalletBountiesCall (76) */
    interface PalletBountiesCall extends Enum {
        readonly isProposeBounty: boolean;
        readonly asProposeBounty: {
            readonly value: Compact<u128>;
            readonly description: Bytes;
        } & Struct;
        readonly isApproveBounty: boolean;
        readonly asApproveBounty: {
            readonly bountyId: Compact<u32>;
        } & Struct;
        readonly isProposeCurator: boolean;
        readonly asProposeCurator: {
            readonly bountyId: Compact<u32>;
            readonly curator: MultiAddress;
            readonly fee: Compact<u128>;
        } & Struct;
        readonly isUnassignCurator: boolean;
        readonly asUnassignCurator: {
            readonly bountyId: Compact<u32>;
        } & Struct;
        readonly isAcceptCurator: boolean;
        readonly asAcceptCurator: {
            readonly bountyId: Compact<u32>;
        } & Struct;
        readonly isAwardBounty: boolean;
        readonly asAwardBounty: {
            readonly bountyId: Compact<u32>;
            readonly beneficiary: MultiAddress;
        } & Struct;
        readonly isClaimBounty: boolean;
        readonly asClaimBounty: {
            readonly bountyId: Compact<u32>;
        } & Struct;
        readonly isCloseBounty: boolean;
        readonly asCloseBounty: {
            readonly bountyId: Compact<u32>;
        } & Struct;
        readonly isExtendBountyExpiry: boolean;
        readonly asExtendBountyExpiry: {
            readonly bountyId: Compact<u32>;
            readonly remark: Bytes;
        } & Struct;
        readonly type: 'ProposeBounty' | 'ApproveBounty' | 'ProposeCurator' | 'UnassignCurator' | 'AcceptCurator' | 'AwardBounty' | 'ClaimBounty' | 'CloseBounty' | 'ExtendBountyExpiry';
    }
    /** @name PalletTreasuryCall (78) */
    interface PalletTreasuryCall extends Enum {
        readonly isProposeSpend: boolean;
        readonly asProposeSpend: {
            readonly value: Compact<u128>;
            readonly beneficiary: MultiAddress;
        } & Struct;
        readonly isRejectProposal: boolean;
        readonly asRejectProposal: {
            readonly proposalId: Compact<u32>;
        } & Struct;
        readonly isApproveProposal: boolean;
        readonly asApproveProposal: {
            readonly proposalId: Compact<u32>;
        } & Struct;
        readonly isSpend: boolean;
        readonly asSpend: {
            readonly amount: Compact<u128>;
            readonly beneficiary: MultiAddress;
        } & Struct;
        readonly isRemoveApproval: boolean;
        readonly asRemoveApproval: {
            readonly proposalId: Compact<u32>;
        } & Struct;
        readonly type: 'ProposeSpend' | 'RejectProposal' | 'ApproveProposal' | 'Spend' | 'RemoveApproval';
    }
    /** @name PalletSessionCall (79) */
    interface PalletSessionCall extends Enum {
        readonly isSetKeys: boolean;
        readonly asSetKeys: {
            readonly keys_: AutographParachainRuntimeSessionKeys;
            readonly proof: Bytes;
        } & Struct;
        readonly isPurgeKeys: boolean;
        readonly type: 'SetKeys' | 'PurgeKeys';
    }
    /** @name AutographParachainRuntimeSessionKeys (80) */
    interface AutographParachainRuntimeSessionKeys extends Struct {
        readonly aura: SpConsensusAuraSr25519AppSr25519Public;
    }
    /** @name SpConsensusAuraSr25519AppSr25519Public (81) */
    interface SpConsensusAuraSr25519AppSr25519Public extends SpCoreSr25519Public {
    }
    /** @name SpCoreSr25519Public (82) */
    interface SpCoreSr25519Public extends U8aFixed {
    }
    /** @name ParachainStakingCall (83) */
    interface ParachainStakingCall extends Enum {
        readonly isForceNewRound: boolean;
        readonly isSetInflation: boolean;
        readonly asSetInflation: {
            readonly collatorMaxRatePercentage: Perquintill;
            readonly collatorAnnualRewardRatePercentage: Perquintill;
            readonly delegatorMaxRatePercentage: Perquintill;
            readonly delegatorAnnualRewardRatePercentage: Perquintill;
        } & Struct;
        readonly isSetMaxSelectedCandidates: boolean;
        readonly asSetMaxSelectedCandidates: {
            readonly new_: u32;
        } & Struct;
        readonly isSetBlocksPerRound: boolean;
        readonly asSetBlocksPerRound: {
            readonly new_: u64;
        } & Struct;
        readonly isSetMaxCandidateStake: boolean;
        readonly asSetMaxCandidateStake: {
            readonly new_: u128;
        } & Struct;
        readonly isForceRemoveCandidate: boolean;
        readonly asForceRemoveCandidate: {
            readonly collator: MultiAddress;
        } & Struct;
        readonly isJoinCandidates: boolean;
        readonly asJoinCandidates: {
            readonly stake: u128;
        } & Struct;
        readonly isInitLeaveCandidates: boolean;
        readonly isExecuteLeaveCandidates: boolean;
        readonly asExecuteLeaveCandidates: {
            readonly collator: MultiAddress;
        } & Struct;
        readonly isCancelLeaveCandidates: boolean;
        readonly isCandidateStakeMore: boolean;
        readonly asCandidateStakeMore: {
            readonly more: u128;
        } & Struct;
        readonly isCandidateStakeLess: boolean;
        readonly asCandidateStakeLess: {
            readonly less: u128;
        } & Struct;
        readonly isJoinDelegators: boolean;
        readonly asJoinDelegators: {
            readonly collator: MultiAddress;
            readonly amount: u128;
        } & Struct;
        readonly isLeaveDelegators: boolean;
        readonly isDelegatorStakeMore: boolean;
        readonly asDelegatorStakeMore: {
            readonly more: u128;
        } & Struct;
        readonly isDelegatorStakeLess: boolean;
        readonly asDelegatorStakeLess: {
            readonly less: u128;
        } & Struct;
        readonly isUnlockUnstaked: boolean;
        readonly asUnlockUnstaked: {
            readonly target: MultiAddress;
        } & Struct;
        readonly isClaimRewards: boolean;
        readonly isIncrementCollatorRewards: boolean;
        readonly isIncrementDelegatorRewards: boolean;
        readonly isExecuteScheduledRewardChange: boolean;
        readonly type: 'ForceNewRound' | 'SetInflation' | 'SetMaxSelectedCandidates' | 'SetBlocksPerRound' | 'SetMaxCandidateStake' | 'ForceRemoveCandidate' | 'JoinCandidates' | 'InitLeaveCandidates' | 'ExecuteLeaveCandidates' | 'CancelLeaveCandidates' | 'CandidateStakeMore' | 'CandidateStakeLess' | 'JoinDelegators' | 'LeaveDelegators' | 'DelegatorStakeMore' | 'DelegatorStakeLess' | 'UnlockUnstaked' | 'ClaimRewards' | 'IncrementCollatorRewards' | 'IncrementDelegatorRewards' | 'ExecuteScheduledRewardChange';
    }
    /** @name PalletConvictionVotingCall (84) */
    interface PalletConvictionVotingCall extends Enum {
        readonly isVote: boolean;
        readonly asVote: {
            readonly pollIndex: Compact<u32>;
            readonly vote: PalletConvictionVotingVoteAccountVote;
        } & Struct;
        readonly isDelegate: boolean;
        readonly asDelegate: {
            readonly class: u16;
            readonly to: MultiAddress;
            readonly conviction: PalletConvictionVotingConviction;
            readonly balance: u128;
        } & Struct;
        readonly isUndelegate: boolean;
        readonly asUndelegate: {
            readonly class: u16;
        } & Struct;
        readonly isUnlock: boolean;
        readonly asUnlock: {
            readonly class: u16;
            readonly target: MultiAddress;
        } & Struct;
        readonly isRemoveVote: boolean;
        readonly asRemoveVote: {
            readonly class: Option<u16>;
            readonly index: u32;
        } & Struct;
        readonly isRemoveOtherVote: boolean;
        readonly asRemoveOtherVote: {
            readonly target: MultiAddress;
            readonly class: u16;
            readonly index: u32;
        } & Struct;
        readonly type: 'Vote' | 'Delegate' | 'Undelegate' | 'Unlock' | 'RemoveVote' | 'RemoveOtherVote';
    }
    /** @name PalletConvictionVotingVoteAccountVote (85) */
    interface PalletConvictionVotingVoteAccountVote extends Enum {
        readonly isStandard: boolean;
        readonly asStandard: {
            readonly vote: Vote;
            readonly balance: u128;
        } & Struct;
        readonly isSplit: boolean;
        readonly asSplit: {
            readonly aye: u128;
            readonly nay: u128;
        } & Struct;
        readonly isSplitAbstain: boolean;
        readonly asSplitAbstain: {
            readonly aye: u128;
            readonly nay: u128;
            readonly abstain: u128;
        } & Struct;
        readonly type: 'Standard' | 'Split' | 'SplitAbstain';
    }
    /** @name PalletConvictionVotingConviction (87) */
    interface PalletConvictionVotingConviction extends Enum {
        readonly isNone: boolean;
        readonly isLocked1x: boolean;
        readonly isLocked2x: boolean;
        readonly isLocked3x: boolean;
        readonly isLocked4x: boolean;
        readonly isLocked5x: boolean;
        readonly isLocked6x: boolean;
        readonly type: 'None' | 'Locked1x' | 'Locked2x' | 'Locked3x' | 'Locked4x' | 'Locked5x' | 'Locked6x';
    }
    /** @name PalletRankedCollectiveCall (89) */
    interface PalletRankedCollectiveCall extends Enum {
        readonly isAddMember: boolean;
        readonly asAddMember: {
            readonly who: MultiAddress;
        } & Struct;
        readonly isPromoteMember: boolean;
        readonly asPromoteMember: {
            readonly who: MultiAddress;
        } & Struct;
        readonly isDemoteMember: boolean;
        readonly asDemoteMember: {
            readonly who: MultiAddress;
        } & Struct;
        readonly isRemoveMember: boolean;
        readonly asRemoveMember: {
            readonly who: MultiAddress;
            readonly minRank: u16;
        } & Struct;
        readonly isVote: boolean;
        readonly asVote: {
            readonly poll: u32;
            readonly aye: bool;
        } & Struct;
        readonly isCleanupPoll: boolean;
        readonly asCleanupPoll: {
            readonly pollIndex: u32;
            readonly max: u32;
        } & Struct;
        readonly type: 'AddMember' | 'PromoteMember' | 'DemoteMember' | 'RemoveMember' | 'Vote' | 'CleanupPoll';
    }
    /** @name PalletReferendaCall (90) */
    interface PalletReferendaCall extends Enum {
        readonly isSubmit: boolean;
        readonly asSubmit: {
            readonly proposalOrigin: AutographParachainRuntimeOriginCaller;
            readonly proposal: FrameSupportPreimagesBounded;
            readonly enactmentMoment: FrameSupportScheduleDispatchTime;
        } & Struct;
        readonly isPlaceDecisionDeposit: boolean;
        readonly asPlaceDecisionDeposit: {
            readonly index: u32;
        } & Struct;
        readonly isRefundDecisionDeposit: boolean;
        readonly asRefundDecisionDeposit: {
            readonly index: u32;
        } & Struct;
        readonly isCancel: boolean;
        readonly asCancel: {
            readonly index: u32;
        } & Struct;
        readonly isKill: boolean;
        readonly asKill: {
            readonly index: u32;
        } & Struct;
        readonly isNudgeReferendum: boolean;
        readonly asNudgeReferendum: {
            readonly index: u32;
        } & Struct;
        readonly isOneFewerDeciding: boolean;
        readonly asOneFewerDeciding: {
            readonly track: u16;
        } & Struct;
        readonly isRefundSubmissionDeposit: boolean;
        readonly asRefundSubmissionDeposit: {
            readonly index: u32;
        } & Struct;
        readonly isSetMetadata: boolean;
        readonly asSetMetadata: {
            readonly index: u32;
            readonly maybeHash: Option<H256>;
        } & Struct;
        readonly type: 'Submit' | 'PlaceDecisionDeposit' | 'RefundDecisionDeposit' | 'Cancel' | 'Kill' | 'NudgeReferendum' | 'OneFewerDeciding' | 'RefundSubmissionDeposit' | 'SetMetadata';
    }
    /** @name AutographParachainRuntimeOriginCaller (91) */
    interface AutographParachainRuntimeOriginCaller extends Enum {
        readonly isSystem: boolean;
        readonly asSystem: FrameSupportDispatchRawOrigin;
        readonly isVoid: boolean;
        readonly isOrigins: boolean;
        readonly asOrigins: AutographParachainRuntimeGovernanceOriginsPalletCustomOriginsOrigin;
        readonly isCumulusXcm: boolean;
        readonly asCumulusXcm: CumulusPalletXcmOrigin;
        readonly isPolkadotXcm: boolean;
        readonly asPolkadotXcm: PalletXcmOrigin;
        readonly isEthereum: boolean;
        readonly asEthereum: PalletEthereumRawOrigin;
        readonly type: 'System' | 'Void' | 'Origins' | 'CumulusXcm' | 'PolkadotXcm' | 'Ethereum';
    }
    /** @name FrameSupportDispatchRawOrigin (92) */
    interface FrameSupportDispatchRawOrigin extends Enum {
        readonly isRoot: boolean;
        readonly isSigned: boolean;
        readonly asSigned: AccountId32;
        readonly isNone: boolean;
        readonly type: 'Root' | 'Signed' | 'None';
    }
    /** @name AutographParachainRuntimeGovernanceOriginsPalletCustomOriginsOrigin (93) */
    interface AutographParachainRuntimeGovernanceOriginsPalletCustomOriginsOrigin extends Enum {
        readonly isStakingAdmin: boolean;
        readonly isTreasurer: boolean;
        readonly isFellowshipAdmin: boolean;
        readonly isGeneralAdmin: boolean;
        readonly isReferendumCanceller: boolean;
        readonly isReferendumKiller: boolean;
        readonly isWhitelistedCaller: boolean;
        readonly isFellowshipProspects: boolean;
        readonly isFellowshipMembers: boolean;
        readonly isFellowshipExperts: boolean;
        readonly isFellowship1Dan: boolean;
        readonly isFellowship2Dan: boolean;
        readonly type: 'StakingAdmin' | 'Treasurer' | 'FellowshipAdmin' | 'GeneralAdmin' | 'ReferendumCanceller' | 'ReferendumKiller' | 'WhitelistedCaller' | 'FellowshipProspects' | 'FellowshipMembers' | 'FellowshipExperts' | 'Fellowship1Dan' | 'Fellowship2Dan';
    }
    /** @name CumulusPalletXcmOrigin (94) */
    interface CumulusPalletXcmOrigin extends Enum {
        readonly isRelay: boolean;
        readonly isSiblingParachain: boolean;
        readonly asSiblingParachain: u32;
        readonly type: 'Relay' | 'SiblingParachain';
    }
    /** @name PalletXcmOrigin (95) */
    interface PalletXcmOrigin extends Enum {
        readonly isXcm: boolean;
        readonly asXcm: StagingXcmV3MultiLocation;
        readonly isResponse: boolean;
        readonly asResponse: StagingXcmV3MultiLocation;
        readonly type: 'Xcm' | 'Response';
    }
    /** @name StagingXcmV3MultiLocation (96) */
    interface StagingXcmV3MultiLocation extends Struct {
        readonly parents: u8;
        readonly interior: StagingXcmV3Junctions;
    }
    /** @name StagingXcmV3Junctions (97) */
    interface StagingXcmV3Junctions extends Enum {
        readonly isHere: boolean;
        readonly isX1: boolean;
        readonly asX1: StagingXcmV3Junction;
        readonly isX2: boolean;
        readonly asX2: ITuple<[StagingXcmV3Junction, StagingXcmV3Junction]>;
        readonly isX3: boolean;
        readonly asX3: ITuple<[StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction]>;
        readonly isX4: boolean;
        readonly asX4: ITuple<[StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction]>;
        readonly isX5: boolean;
        readonly asX5: ITuple<[StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction]>;
        readonly isX6: boolean;
        readonly asX6: ITuple<[StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction]>;
        readonly isX7: boolean;
        readonly asX7: ITuple<[StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction]>;
        readonly isX8: boolean;
        readonly asX8: ITuple<[StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction]>;
        readonly type: 'Here' | 'X1' | 'X2' | 'X3' | 'X4' | 'X5' | 'X6' | 'X7' | 'X8';
    }
    /** @name StagingXcmV3Junction (98) */
    interface StagingXcmV3Junction extends Enum {
        readonly isParachain: boolean;
        readonly asParachain: Compact<u32>;
        readonly isAccountId32: boolean;
        readonly asAccountId32: {
            readonly network: Option<StagingXcmV3JunctionNetworkId>;
            readonly id: U8aFixed;
        } & Struct;
        readonly isAccountIndex64: boolean;
        readonly asAccountIndex64: {
            readonly network: Option<StagingXcmV3JunctionNetworkId>;
            readonly index: Compact<u64>;
        } & Struct;
        readonly isAccountKey20: boolean;
        readonly asAccountKey20: {
            readonly network: Option<StagingXcmV3JunctionNetworkId>;
            readonly key: U8aFixed;
        } & Struct;
        readonly isPalletInstance: boolean;
        readonly asPalletInstance: u8;
        readonly isGeneralIndex: boolean;
        readonly asGeneralIndex: Compact<u128>;
        readonly isGeneralKey: boolean;
        readonly asGeneralKey: {
            readonly length: u8;
            readonly data: U8aFixed;
        } & Struct;
        readonly isOnlyChild: boolean;
        readonly isPlurality: boolean;
        readonly asPlurality: {
            readonly id: StagingXcmV3JunctionBodyId;
            readonly part: StagingXcmV3JunctionBodyPart;
        } & Struct;
        readonly isGlobalConsensus: boolean;
        readonly asGlobalConsensus: StagingXcmV3JunctionNetworkId;
        readonly type: 'Parachain' | 'AccountId32' | 'AccountIndex64' | 'AccountKey20' | 'PalletInstance' | 'GeneralIndex' | 'GeneralKey' | 'OnlyChild' | 'Plurality' | 'GlobalConsensus';
    }
    /** @name StagingXcmV3JunctionNetworkId (100) */
    interface StagingXcmV3JunctionNetworkId extends Enum {
        readonly isByGenesis: boolean;
        readonly asByGenesis: U8aFixed;
        readonly isByFork: boolean;
        readonly asByFork: {
            readonly blockNumber: u64;
            readonly blockHash: U8aFixed;
        } & Struct;
        readonly isPolkadot: boolean;
        readonly isKusama: boolean;
        readonly isWestend: boolean;
        readonly isRococo: boolean;
        readonly isWococo: boolean;
        readonly isEthereum: boolean;
        readonly asEthereum: {
            readonly chainId: Compact<u64>;
        } & Struct;
        readonly isBitcoinCore: boolean;
        readonly isBitcoinCash: boolean;
        readonly type: 'ByGenesis' | 'ByFork' | 'Polkadot' | 'Kusama' | 'Westend' | 'Rococo' | 'Wococo' | 'Ethereum' | 'BitcoinCore' | 'BitcoinCash';
    }
    /** @name StagingXcmV3JunctionBodyId (101) */
    interface StagingXcmV3JunctionBodyId extends Enum {
        readonly isUnit: boolean;
        readonly isMoniker: boolean;
        readonly asMoniker: U8aFixed;
        readonly isIndex: boolean;
        readonly asIndex: Compact<u32>;
        readonly isExecutive: boolean;
        readonly isTechnical: boolean;
        readonly isLegislative: boolean;
        readonly isJudicial: boolean;
        readonly isDefense: boolean;
        readonly isAdministration: boolean;
        readonly isTreasury: boolean;
        readonly type: 'Unit' | 'Moniker' | 'Index' | 'Executive' | 'Technical' | 'Legislative' | 'Judicial' | 'Defense' | 'Administration' | 'Treasury';
    }
    /** @name StagingXcmV3JunctionBodyPart (102) */
    interface StagingXcmV3JunctionBodyPart extends Enum {
        readonly isVoice: boolean;
        readonly isMembers: boolean;
        readonly asMembers: {
            readonly count: Compact<u32>;
        } & Struct;
        readonly isFraction: boolean;
        readonly asFraction: {
            readonly nom: Compact<u32>;
            readonly denom: Compact<u32>;
        } & Struct;
        readonly isAtLeastProportion: boolean;
        readonly asAtLeastProportion: {
            readonly nom: Compact<u32>;
            readonly denom: Compact<u32>;
        } & Struct;
        readonly isMoreThanProportion: boolean;
        readonly asMoreThanProportion: {
            readonly nom: Compact<u32>;
            readonly denom: Compact<u32>;
        } & Struct;
        readonly type: 'Voice' | 'Members' | 'Fraction' | 'AtLeastProportion' | 'MoreThanProportion';
    }
    /** @name PalletEthereumRawOrigin (103) */
    interface PalletEthereumRawOrigin extends Enum {
        readonly isEthereumTransaction: boolean;
        readonly asEthereumTransaction: H160;
        readonly type: 'EthereumTransaction';
    }
    /** @name SpCoreVoid (105) */
    type SpCoreVoid = Null;
    /** @name FrameSupportScheduleDispatchTime (106) */
    interface FrameSupportScheduleDispatchTime extends Enum {
        readonly isAt: boolean;
        readonly asAt: u64;
        readonly isAfter: boolean;
        readonly asAfter: u64;
        readonly type: 'At' | 'After';
    }
    /** @name PalletWhitelistCall (109) */
    interface PalletWhitelistCall extends Enum {
        readonly isWhitelistCall: boolean;
        readonly asWhitelistCall: {
            readonly callHash: H256;
        } & Struct;
        readonly isRemoveWhitelistedCall: boolean;
        readonly asRemoveWhitelistedCall: {
            readonly callHash: H256;
        } & Struct;
        readonly isDispatchWhitelistedCall: boolean;
        readonly asDispatchWhitelistedCall: {
            readonly callHash: H256;
            readonly callEncodedLen: u32;
            readonly callWeightWitness: SpWeightsWeightV2Weight;
        } & Struct;
        readonly isDispatchWhitelistedCallWithPreimage: boolean;
        readonly asDispatchWhitelistedCallWithPreimage: {
            readonly call: Call;
        } & Struct;
        readonly type: 'WhitelistCall' | 'RemoveWhitelistedCall' | 'DispatchWhitelistedCall' | 'DispatchWhitelistedCallWithPreimage';
    }
    /** @name PalletMultisigCall (110) */
    interface PalletMultisigCall extends Enum {
        readonly isAsMultiThreshold1: boolean;
        readonly asAsMultiThreshold1: {
            readonly otherSignatories: Vec<AccountId32>;
            readonly call: Call;
        } & Struct;
        readonly isAsMulti: boolean;
        readonly asAsMulti: {
            readonly threshold: u16;
            readonly otherSignatories: Vec<AccountId32>;
            readonly maybeTimepoint: Option<PalletMultisigTimepoint>;
            readonly call: Call;
            readonly maxWeight: SpWeightsWeightV2Weight;
        } & Struct;
        readonly isApproveAsMulti: boolean;
        readonly asApproveAsMulti: {
            readonly threshold: u16;
            readonly otherSignatories: Vec<AccountId32>;
            readonly maybeTimepoint: Option<PalletMultisigTimepoint>;
            readonly callHash: U8aFixed;
            readonly maxWeight: SpWeightsWeightV2Weight;
        } & Struct;
        readonly isCancelAsMulti: boolean;
        readonly asCancelAsMulti: {
            readonly threshold: u16;
            readonly otherSignatories: Vec<AccountId32>;
            readonly timepoint: PalletMultisigTimepoint;
            readonly callHash: U8aFixed;
        } & Struct;
        readonly type: 'AsMultiThreshold1' | 'AsMulti' | 'ApproveAsMulti' | 'CancelAsMulti';
    }
    /** @name PalletMultisigTimepoint (112) */
    interface PalletMultisigTimepoint extends Struct {
        readonly height: u64;
        readonly index: u32;
    }
    /** @name PalletSudoCall (113) */
    interface PalletSudoCall extends Enum {
        readonly isSudo: boolean;
        readonly asSudo: {
            readonly call: Call;
        } & Struct;
        readonly isSudoUncheckedWeight: boolean;
        readonly asSudoUncheckedWeight: {
            readonly call: Call;
            readonly weight: SpWeightsWeightV2Weight;
        } & Struct;
        readonly isSetKey: boolean;
        readonly asSetKey: {
            readonly new_: MultiAddress;
        } & Struct;
        readonly isSudoAs: boolean;
        readonly asSudoAs: {
            readonly who: MultiAddress;
            readonly call: Call;
        } & Struct;
        readonly type: 'Sudo' | 'SudoUncheckedWeight' | 'SetKey' | 'SudoAs';
    }
    /** @name PalletTxPauseCall (114) */
    interface PalletTxPauseCall extends Enum {
        readonly isPause: boolean;
        readonly asPause: {
            readonly fullName: ITuple<[Bytes, Bytes]>;
        } & Struct;
        readonly isUnpause: boolean;
        readonly asUnpause: {
            readonly ident: ITuple<[Bytes, Bytes]>;
        } & Struct;
        readonly type: 'Pause' | 'Unpause';
    }
    /** @name PalletSchedulerCall (117) */
    interface PalletSchedulerCall extends Enum {
        readonly isSchedule: boolean;
        readonly asSchedule: {
            readonly when: u64;
            readonly maybePeriodic: Option<ITuple<[u64, u32]>>;
            readonly priority: u8;
            readonly call: Call;
        } & Struct;
        readonly isCancel: boolean;
        readonly asCancel: {
            readonly when: u64;
            readonly index: u32;
        } & Struct;
        readonly isScheduleNamed: boolean;
        readonly asScheduleNamed: {
            readonly id: U8aFixed;
            readonly when: u64;
            readonly maybePeriodic: Option<ITuple<[u64, u32]>>;
            readonly priority: u8;
            readonly call: Call;
        } & Struct;
        readonly isCancelNamed: boolean;
        readonly asCancelNamed: {
            readonly id: U8aFixed;
        } & Struct;
        readonly isScheduleAfter: boolean;
        readonly asScheduleAfter: {
            readonly after: u64;
            readonly maybePeriodic: Option<ITuple<[u64, u32]>>;
            readonly priority: u8;
            readonly call: Call;
        } & Struct;
        readonly isScheduleNamedAfter: boolean;
        readonly asScheduleNamedAfter: {
            readonly id: U8aFixed;
            readonly after: u64;
            readonly maybePeriodic: Option<ITuple<[u64, u32]>>;
            readonly priority: u8;
            readonly call: Call;
        } & Struct;
        readonly type: 'Schedule' | 'Cancel' | 'ScheduleNamed' | 'CancelNamed' | 'ScheduleAfter' | 'ScheduleNamedAfter';
    }
    /** @name PalletPreimageCall (120) */
    interface PalletPreimageCall extends Enum {
        readonly isNotePreimage: boolean;
        readonly asNotePreimage: {
            readonly bytes: Bytes;
        } & Struct;
        readonly isUnnotePreimage: boolean;
        readonly asUnnotePreimage: {
            readonly hash_: H256;
        } & Struct;
        readonly isRequestPreimage: boolean;
        readonly asRequestPreimage: {
            readonly hash_: H256;
        } & Struct;
        readonly isUnrequestPreimage: boolean;
        readonly asUnrequestPreimage: {
            readonly hash_: H256;
        } & Struct;
        readonly type: 'NotePreimage' | 'UnnotePreimage' | 'RequestPreimage' | 'UnrequestPreimage';
    }
    /** @name PalletWhitelistAddInvestorData (122) */
    interface PalletWhitelistAddInvestorData extends Struct {
        readonly key: U8aFixed;
        readonly account: AccountId32;
        readonly isActive: bool;
    }
    /** @name PalletAccessCall (123) */
    interface PalletAccessCall extends Enum {
        readonly isGrantRole: boolean;
        readonly asGrantRole: {
            readonly account: AccountId32;
            readonly role: AutographParachainRuntimeRole;
        } & Struct;
        readonly isTakeRole: boolean;
        readonly asTakeRole: {
            readonly account: AccountId32;
            readonly role: AutographParachainRuntimeRole;
        } & Struct;
        readonly type: 'GrantRole' | 'TakeRole';
    }
    /** @name AutographParachainRuntimeRole (124) */
    interface AutographParachainRuntimeRole extends Enum {
        readonly isAccessRoot: boolean;
        readonly isWhitelistAdmin: boolean;
        readonly isWhitelistManager: boolean;
        readonly isConstructor: boolean;
        readonly type: 'AccessRoot' | 'WhitelistAdmin' | 'WhitelistManager' | 'Constructor';
    }
    /** @name PalletRefungibleCall (125) */
    interface PalletRefungibleCall extends Enum {
        readonly isInitCollection: boolean;
        readonly asInitCollection: {
            readonly data: CollectionPrimitivesCreateRftCollectionData;
        } & Struct;
        readonly isDestroyCollection: boolean;
        readonly asDestroyCollection: {
            readonly collectionId: u32;
        } & Struct;
        readonly isSetCollectionProperty: boolean;
        readonly asSetCollectionProperty: {
            readonly collectionId: u32;
            readonly property: CollectionPrimitivesPropertiesProperty;
        } & Struct;
        readonly isDeleteCollectionProperty: boolean;
        readonly asDeleteCollectionProperty: {
            readonly collectionId: u32;
            readonly propertyKey: Bytes;
        } & Struct;
        readonly isSetCollectionProperties: boolean;
        readonly asSetCollectionProperties: {
            readonly collectionId: u32;
            readonly properties: Vec<CollectionPrimitivesPropertiesProperty>;
        } & Struct;
        readonly isDeleteCollectionProperties: boolean;
        readonly asDeleteCollectionProperties: {
            readonly collectionId: u32;
            readonly propertyKeys: Vec<Bytes>;
        } & Struct;
        readonly isSetPropertyPermission: boolean;
        readonly asSetPropertyPermission: {
            readonly collectionId: u32;
            readonly propertyPermission: CollectionPrimitivesPropertiesPropertyKeyPermission;
        } & Struct;
        readonly isCreateItem: boolean;
        readonly asCreateItem: {
            readonly collectionId: u32;
            readonly data: PalletRefungibleCreateItemData;
        } & Struct;
        readonly isCreateMultipleItems: boolean;
        readonly asCreateMultipleItems: {
            readonly collectionId: u32;
            readonly data: Vec<PalletRefungibleCreateItemData>;
        } & Struct;
        readonly isSetTokenProperty: boolean;
        readonly asSetTokenProperty: {
            readonly collectionId: u32;
            readonly tokenId: u32;
            readonly property: CollectionPrimitivesPropertiesProperty;
        } & Struct;
        readonly isSetTokenProperties: boolean;
        readonly asSetTokenProperties: {
            readonly collectionId: u32;
            readonly tokenId: u32;
            readonly properties: Vec<CollectionPrimitivesPropertiesProperty>;
        } & Struct;
        readonly isDeleteTokenProperty: boolean;
        readonly asDeleteTokenProperty: {
            readonly collectionId: u32;
            readonly tokenId: u32;
            readonly propertyKey: Bytes;
        } & Struct;
        readonly isDeleteTokenProperties: boolean;
        readonly asDeleteTokenProperties: {
            readonly collectionId: u32;
            readonly tokenId: u32;
            readonly propertiesKeys: Vec<Bytes>;
        } & Struct;
        readonly isTransfer: boolean;
        readonly asTransfer: {
            readonly collectionId: u32;
            readonly tokenId: u32;
            readonly to: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isTransferFrom: boolean;
        readonly asTransferFrom: {
            readonly collectionId: u32;
            readonly tokenId: u32;
            readonly from: AccountId32;
            readonly to: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isSetAllowance: boolean;
        readonly asSetAllowance: {
            readonly collectionId: u32;
            readonly tokenId: u32;
            readonly spender: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isMintAdditionalPieces: boolean;
        readonly asMintAdditionalPieces: {
            readonly collectionId: u32;
            readonly tokenId: u32;
            readonly to: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isBurn: boolean;
        readonly asBurn: {
            readonly collectionId: u32;
            readonly tokenId: u32;
            readonly amount: u128;
        } & Struct;
        readonly isBurnFrom: boolean;
        readonly asBurnFrom: {
            readonly collectionId: u32;
            readonly tokenId: u32;
            readonly from: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isRepartition: boolean;
        readonly asRepartition: {
            readonly collectionId: u32;
            readonly tokenId: u32;
            readonly amount: u128;
        } & Struct;
        readonly type: 'InitCollection' | 'DestroyCollection' | 'SetCollectionProperty' | 'DeleteCollectionProperty' | 'SetCollectionProperties' | 'DeleteCollectionProperties' | 'SetPropertyPermission' | 'CreateItem' | 'CreateMultipleItems' | 'SetTokenProperty' | 'SetTokenProperties' | 'DeleteTokenProperty' | 'DeleteTokenProperties' | 'Transfer' | 'TransferFrom' | 'SetAllowance' | 'MintAdditionalPieces' | 'Burn' | 'BurnFrom' | 'Repartition';
    }
    /** @name CollectionPrimitivesCreateRftCollectionData (126) */
    interface CollectionPrimitivesCreateRftCollectionData extends Struct {
        readonly name: Vec<u16>;
        readonly description: Vec<u16>;
        readonly tokenPrefix: Bytes;
        readonly limits: Option<CollectionPrimitivesCollectionLimits>;
        readonly propertyPermissions: Vec<CollectionPrimitivesPropertiesPropertyKeyPermission>;
        readonly properties: Vec<CollectionPrimitivesPropertiesProperty>;
    }
    /** @name CollectionPrimitivesCollectionLimits (132) */
    interface CollectionPrimitivesCollectionLimits extends Struct {
        readonly accountTokenOwnershipLimit: Option<u32>;
        readonly collectionTokenLimit: Option<u32>;
        readonly ownerCanDestroy: Option<bool>;
    }
    /** @name CollectionPrimitivesPropertiesPropertyKeyPermission (136) */
    interface CollectionPrimitivesPropertiesPropertyKeyPermission extends Struct {
        readonly key: Bytes;
        readonly permission: CollectionPrimitivesPropertiesPropertyPermission;
    }
    /** @name CollectionPrimitivesPropertiesPropertyPermission (137) */
    interface CollectionPrimitivesPropertiesPropertyPermission extends Struct {
        readonly mutable: bool;
    }
    /** @name CollectionPrimitivesPropertiesProperty (140) */
    interface CollectionPrimitivesPropertiesProperty extends Struct {
        readonly key: Bytes;
        readonly value: Bytes;
    }
    /** @name PalletRefungibleCreateItemData (145) */
    interface PalletRefungibleCreateItemData extends Struct {
        readonly balances: Vec<ITuple<[AccountId32, u128]>>;
        readonly properties: Vec<CollectionPrimitivesPropertiesProperty>;
    }
    /** @name CumulusPalletXcmpQueueCall (150) */
    interface CumulusPalletXcmpQueueCall extends Enum {
        readonly isServiceOverweight: boolean;
        readonly asServiceOverweight: {
            readonly index: u64;
            readonly weightLimit: SpWeightsWeightV2Weight;
        } & Struct;
        readonly isSuspendXcmExecution: boolean;
        readonly isResumeXcmExecution: boolean;
        readonly isUpdateSuspendThreshold: boolean;
        readonly asUpdateSuspendThreshold: {
            readonly new_: u32;
        } & Struct;
        readonly isUpdateDropThreshold: boolean;
        readonly asUpdateDropThreshold: {
            readonly new_: u32;
        } & Struct;
        readonly isUpdateResumeThreshold: boolean;
        readonly asUpdateResumeThreshold: {
            readonly new_: u32;
        } & Struct;
        readonly isUpdateThresholdWeight: boolean;
        readonly asUpdateThresholdWeight: {
            readonly new_: SpWeightsWeightV2Weight;
        } & Struct;
        readonly isUpdateWeightRestrictDecay: boolean;
        readonly asUpdateWeightRestrictDecay: {
            readonly new_: SpWeightsWeightV2Weight;
        } & Struct;
        readonly isUpdateXcmpMaxIndividualWeight: boolean;
        readonly asUpdateXcmpMaxIndividualWeight: {
            readonly new_: SpWeightsWeightV2Weight;
        } & Struct;
        readonly type: 'ServiceOverweight' | 'SuspendXcmExecution' | 'ResumeXcmExecution' | 'UpdateSuspendThreshold' | 'UpdateDropThreshold' | 'UpdateResumeThreshold' | 'UpdateThresholdWeight' | 'UpdateWeightRestrictDecay' | 'UpdateXcmpMaxIndividualWeight';
    }
    /** @name CumulusPalletXcmCall (151) */
    type CumulusPalletXcmCall = Null;
    /** @name CumulusPalletDmpQueueCall (152) */
    interface CumulusPalletDmpQueueCall extends Enum {
        readonly isServiceOverweight: boolean;
        readonly asServiceOverweight: {
            readonly index: u64;
            readonly weightLimit: SpWeightsWeightV2Weight;
        } & Struct;
        readonly type: 'ServiceOverweight';
    }
    /** @name PalletXcmCall (153) */
    interface PalletXcmCall extends Enum {
        readonly isSend: boolean;
        readonly asSend: {
            readonly dest: StagingXcmVersionedMultiLocation;
            readonly message: StagingXcmVersionedXcm;
        } & Struct;
        readonly isTeleportAssets: boolean;
        readonly asTeleportAssets: {
            readonly dest: StagingXcmVersionedMultiLocation;
            readonly beneficiary: StagingXcmVersionedMultiLocation;
            readonly assets: StagingXcmVersionedMultiAssets;
            readonly feeAssetItem: u32;
        } & Struct;
        readonly isReserveTransferAssets: boolean;
        readonly asReserveTransferAssets: {
            readonly dest: StagingXcmVersionedMultiLocation;
            readonly beneficiary: StagingXcmVersionedMultiLocation;
            readonly assets: StagingXcmVersionedMultiAssets;
            readonly feeAssetItem: u32;
        } & Struct;
        readonly isExecute: boolean;
        readonly asExecute: {
            readonly message: StagingXcmVersionedXcm;
            readonly maxWeight: SpWeightsWeightV2Weight;
        } & Struct;
        readonly isForceXcmVersion: boolean;
        readonly asForceXcmVersion: {
            readonly location: StagingXcmV3MultiLocation;
            readonly version: u32;
        } & Struct;
        readonly isForceDefaultXcmVersion: boolean;
        readonly asForceDefaultXcmVersion: {
            readonly maybeXcmVersion: Option<u32>;
        } & Struct;
        readonly isForceSubscribeVersionNotify: boolean;
        readonly asForceSubscribeVersionNotify: {
            readonly location: StagingXcmVersionedMultiLocation;
        } & Struct;
        readonly isForceUnsubscribeVersionNotify: boolean;
        readonly asForceUnsubscribeVersionNotify: {
            readonly location: StagingXcmVersionedMultiLocation;
        } & Struct;
        readonly isLimitedReserveTransferAssets: boolean;
        readonly asLimitedReserveTransferAssets: {
            readonly dest: StagingXcmVersionedMultiLocation;
            readonly beneficiary: StagingXcmVersionedMultiLocation;
            readonly assets: StagingXcmVersionedMultiAssets;
            readonly feeAssetItem: u32;
            readonly weightLimit: StagingXcmV3WeightLimit;
        } & Struct;
        readonly isLimitedTeleportAssets: boolean;
        readonly asLimitedTeleportAssets: {
            readonly dest: StagingXcmVersionedMultiLocation;
            readonly beneficiary: StagingXcmVersionedMultiLocation;
            readonly assets: StagingXcmVersionedMultiAssets;
            readonly feeAssetItem: u32;
            readonly weightLimit: StagingXcmV3WeightLimit;
        } & Struct;
        readonly isForceSuspension: boolean;
        readonly asForceSuspension: {
            readonly suspended: bool;
        } & Struct;
        readonly type: 'Send' | 'TeleportAssets' | 'ReserveTransferAssets' | 'Execute' | 'ForceXcmVersion' | 'ForceDefaultXcmVersion' | 'ForceSubscribeVersionNotify' | 'ForceUnsubscribeVersionNotify' | 'LimitedReserveTransferAssets' | 'LimitedTeleportAssets' | 'ForceSuspension';
    }
    /** @name StagingXcmVersionedMultiLocation (154) */
    interface StagingXcmVersionedMultiLocation extends Enum {
        readonly isV2: boolean;
        readonly asV2: StagingXcmV2MultiLocation;
        readonly isV3: boolean;
        readonly asV3: StagingXcmV3MultiLocation;
        readonly type: 'V2' | 'V3';
    }
    /** @name StagingXcmV2MultiLocation (155) */
    interface StagingXcmV2MultiLocation extends Struct {
        readonly parents: u8;
        readonly interior: StagingXcmV2MultilocationJunctions;
    }
    /** @name StagingXcmV2MultilocationJunctions (156) */
    interface StagingXcmV2MultilocationJunctions extends Enum {
        readonly isHere: boolean;
        readonly isX1: boolean;
        readonly asX1: StagingXcmV2Junction;
        readonly isX2: boolean;
        readonly asX2: ITuple<[StagingXcmV2Junction, StagingXcmV2Junction]>;
        readonly isX3: boolean;
        readonly asX3: ITuple<[StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction]>;
        readonly isX4: boolean;
        readonly asX4: ITuple<[StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction]>;
        readonly isX5: boolean;
        readonly asX5: ITuple<[StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction]>;
        readonly isX6: boolean;
        readonly asX6: ITuple<[StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction]>;
        readonly isX7: boolean;
        readonly asX7: ITuple<[StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction]>;
        readonly isX8: boolean;
        readonly asX8: ITuple<[StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction]>;
        readonly type: 'Here' | 'X1' | 'X2' | 'X3' | 'X4' | 'X5' | 'X6' | 'X7' | 'X8';
    }
    /** @name StagingXcmV2Junction (157) */
    interface StagingXcmV2Junction extends Enum {
        readonly isParachain: boolean;
        readonly asParachain: Compact<u32>;
        readonly isAccountId32: boolean;
        readonly asAccountId32: {
            readonly network: StagingXcmV2NetworkId;
            readonly id: U8aFixed;
        } & Struct;
        readonly isAccountIndex64: boolean;
        readonly asAccountIndex64: {
            readonly network: StagingXcmV2NetworkId;
            readonly index: Compact<u64>;
        } & Struct;
        readonly isAccountKey20: boolean;
        readonly asAccountKey20: {
            readonly network: StagingXcmV2NetworkId;
            readonly key: U8aFixed;
        } & Struct;
        readonly isPalletInstance: boolean;
        readonly asPalletInstance: u8;
        readonly isGeneralIndex: boolean;
        readonly asGeneralIndex: Compact<u128>;
        readonly isGeneralKey: boolean;
        readonly asGeneralKey: Bytes;
        readonly isOnlyChild: boolean;
        readonly isPlurality: boolean;
        readonly asPlurality: {
            readonly id: StagingXcmV2BodyId;
            readonly part: StagingXcmV2BodyPart;
        } & Struct;
        readonly type: 'Parachain' | 'AccountId32' | 'AccountIndex64' | 'AccountKey20' | 'PalletInstance' | 'GeneralIndex' | 'GeneralKey' | 'OnlyChild' | 'Plurality';
    }
    /** @name StagingXcmV2NetworkId (158) */
    interface StagingXcmV2NetworkId extends Enum {
        readonly isAny: boolean;
        readonly isNamed: boolean;
        readonly asNamed: Bytes;
        readonly isPolkadot: boolean;
        readonly isKusama: boolean;
        readonly type: 'Any' | 'Named' | 'Polkadot' | 'Kusama';
    }
    /** @name StagingXcmV2BodyId (160) */
    interface StagingXcmV2BodyId extends Enum {
        readonly isUnit: boolean;
        readonly isNamed: boolean;
        readonly asNamed: Bytes;
        readonly isIndex: boolean;
        readonly asIndex: Compact<u32>;
        readonly isExecutive: boolean;
        readonly isTechnical: boolean;
        readonly isLegislative: boolean;
        readonly isJudicial: boolean;
        readonly isDefense: boolean;
        readonly isAdministration: boolean;
        readonly isTreasury: boolean;
        readonly type: 'Unit' | 'Named' | 'Index' | 'Executive' | 'Technical' | 'Legislative' | 'Judicial' | 'Defense' | 'Administration' | 'Treasury';
    }
    /** @name StagingXcmV2BodyPart (161) */
    interface StagingXcmV2BodyPart extends Enum {
        readonly isVoice: boolean;
        readonly isMembers: boolean;
        readonly asMembers: {
            readonly count: Compact<u32>;
        } & Struct;
        readonly isFraction: boolean;
        readonly asFraction: {
            readonly nom: Compact<u32>;
            readonly denom: Compact<u32>;
        } & Struct;
        readonly isAtLeastProportion: boolean;
        readonly asAtLeastProportion: {
            readonly nom: Compact<u32>;
            readonly denom: Compact<u32>;
        } & Struct;
        readonly isMoreThanProportion: boolean;
        readonly asMoreThanProportion: {
            readonly nom: Compact<u32>;
            readonly denom: Compact<u32>;
        } & Struct;
        readonly type: 'Voice' | 'Members' | 'Fraction' | 'AtLeastProportion' | 'MoreThanProportion';
    }
    /** @name StagingXcmVersionedXcm (162) */
    interface StagingXcmVersionedXcm extends Enum {
        readonly isV2: boolean;
        readonly asV2: StagingXcmV2Xcm;
        readonly isV3: boolean;
        readonly asV3: StagingXcmV3Xcm;
        readonly type: 'V2' | 'V3';
    }
    /** @name StagingXcmV2Xcm (163) */
    interface StagingXcmV2Xcm extends Vec<StagingXcmV2Instruction> {
    }
    /** @name StagingXcmV2Instruction (165) */
    interface StagingXcmV2Instruction extends Enum {
        readonly isWithdrawAsset: boolean;
        readonly asWithdrawAsset: StagingXcmV2MultiassetMultiAssets;
        readonly isReserveAssetDeposited: boolean;
        readonly asReserveAssetDeposited: StagingXcmV2MultiassetMultiAssets;
        readonly isReceiveTeleportedAsset: boolean;
        readonly asReceiveTeleportedAsset: StagingXcmV2MultiassetMultiAssets;
        readonly isQueryResponse: boolean;
        readonly asQueryResponse: {
            readonly queryId: Compact<u64>;
            readonly response: StagingXcmV2Response;
            readonly maxWeight: Compact<u64>;
        } & Struct;
        readonly isTransferAsset: boolean;
        readonly asTransferAsset: {
            readonly assets: StagingXcmV2MultiassetMultiAssets;
            readonly beneficiary: StagingXcmV2MultiLocation;
        } & Struct;
        readonly isTransferReserveAsset: boolean;
        readonly asTransferReserveAsset: {
            readonly assets: StagingXcmV2MultiassetMultiAssets;
            readonly dest: StagingXcmV2MultiLocation;
            readonly xcm: StagingXcmV2Xcm;
        } & Struct;
        readonly isTransact: boolean;
        readonly asTransact: {
            readonly originType: StagingXcmV2OriginKind;
            readonly requireWeightAtMost: Compact<u64>;
            readonly call: StagingXcmDoubleEncoded;
        } & Struct;
        readonly isHrmpNewChannelOpenRequest: boolean;
        readonly asHrmpNewChannelOpenRequest: {
            readonly sender: Compact<u32>;
            readonly maxMessageSize: Compact<u32>;
            readonly maxCapacity: Compact<u32>;
        } & Struct;
        readonly isHrmpChannelAccepted: boolean;
        readonly asHrmpChannelAccepted: {
            readonly recipient: Compact<u32>;
        } & Struct;
        readonly isHrmpChannelClosing: boolean;
        readonly asHrmpChannelClosing: {
            readonly initiator: Compact<u32>;
            readonly sender: Compact<u32>;
            readonly recipient: Compact<u32>;
        } & Struct;
        readonly isClearOrigin: boolean;
        readonly isDescendOrigin: boolean;
        readonly asDescendOrigin: StagingXcmV2MultilocationJunctions;
        readonly isReportError: boolean;
        readonly asReportError: {
            readonly queryId: Compact<u64>;
            readonly dest: StagingXcmV2MultiLocation;
            readonly maxResponseWeight: Compact<u64>;
        } & Struct;
        readonly isDepositAsset: boolean;
        readonly asDepositAsset: {
            readonly assets: StagingXcmV2MultiassetMultiAssetFilter;
            readonly maxAssets: Compact<u32>;
            readonly beneficiary: StagingXcmV2MultiLocation;
        } & Struct;
        readonly isDepositReserveAsset: boolean;
        readonly asDepositReserveAsset: {
            readonly assets: StagingXcmV2MultiassetMultiAssetFilter;
            readonly maxAssets: Compact<u32>;
            readonly dest: StagingXcmV2MultiLocation;
            readonly xcm: StagingXcmV2Xcm;
        } & Struct;
        readonly isExchangeAsset: boolean;
        readonly asExchangeAsset: {
            readonly give: StagingXcmV2MultiassetMultiAssetFilter;
            readonly receive: StagingXcmV2MultiassetMultiAssets;
        } & Struct;
        readonly isInitiateReserveWithdraw: boolean;
        readonly asInitiateReserveWithdraw: {
            readonly assets: StagingXcmV2MultiassetMultiAssetFilter;
            readonly reserve: StagingXcmV2MultiLocation;
            readonly xcm: StagingXcmV2Xcm;
        } & Struct;
        readonly isInitiateTeleport: boolean;
        readonly asInitiateTeleport: {
            readonly assets: StagingXcmV2MultiassetMultiAssetFilter;
            readonly dest: StagingXcmV2MultiLocation;
            readonly xcm: StagingXcmV2Xcm;
        } & Struct;
        readonly isQueryHolding: boolean;
        readonly asQueryHolding: {
            readonly queryId: Compact<u64>;
            readonly dest: StagingXcmV2MultiLocation;
            readonly assets: StagingXcmV2MultiassetMultiAssetFilter;
            readonly maxResponseWeight: Compact<u64>;
        } & Struct;
        readonly isBuyExecution: boolean;
        readonly asBuyExecution: {
            readonly fees: StagingXcmV2MultiAsset;
            readonly weightLimit: StagingXcmV2WeightLimit;
        } & Struct;
        readonly isRefundSurplus: boolean;
        readonly isSetErrorHandler: boolean;
        readonly asSetErrorHandler: StagingXcmV2Xcm;
        readonly isSetAppendix: boolean;
        readonly asSetAppendix: StagingXcmV2Xcm;
        readonly isClearError: boolean;
        readonly isClaimAsset: boolean;
        readonly asClaimAsset: {
            readonly assets: StagingXcmV2MultiassetMultiAssets;
            readonly ticket: StagingXcmV2MultiLocation;
        } & Struct;
        readonly isTrap: boolean;
        readonly asTrap: Compact<u64>;
        readonly isSubscribeVersion: boolean;
        readonly asSubscribeVersion: {
            readonly queryId: Compact<u64>;
            readonly maxResponseWeight: Compact<u64>;
        } & Struct;
        readonly isUnsubscribeVersion: boolean;
        readonly type: 'WithdrawAsset' | 'ReserveAssetDeposited' | 'ReceiveTeleportedAsset' | 'QueryResponse' | 'TransferAsset' | 'TransferReserveAsset' | 'Transact' | 'HrmpNewChannelOpenRequest' | 'HrmpChannelAccepted' | 'HrmpChannelClosing' | 'ClearOrigin' | 'DescendOrigin' | 'ReportError' | 'DepositAsset' | 'DepositReserveAsset' | 'ExchangeAsset' | 'InitiateReserveWithdraw' | 'InitiateTeleport' | 'QueryHolding' | 'BuyExecution' | 'RefundSurplus' | 'SetErrorHandler' | 'SetAppendix' | 'ClearError' | 'ClaimAsset' | 'Trap' | 'SubscribeVersion' | 'UnsubscribeVersion';
    }
    /** @name StagingXcmV2MultiassetMultiAssets (166) */
    interface StagingXcmV2MultiassetMultiAssets extends Vec<StagingXcmV2MultiAsset> {
    }
    /** @name StagingXcmV2MultiAsset (168) */
    interface StagingXcmV2MultiAsset extends Struct {
        readonly id: StagingXcmV2MultiassetAssetId;
        readonly fun: StagingXcmV2MultiassetFungibility;
    }
    /** @name StagingXcmV2MultiassetAssetId (169) */
    interface StagingXcmV2MultiassetAssetId extends Enum {
        readonly isConcrete: boolean;
        readonly asConcrete: StagingXcmV2MultiLocation;
        readonly isAbstract: boolean;
        readonly asAbstract: Bytes;
        readonly type: 'Concrete' | 'Abstract';
    }
    /** @name StagingXcmV2MultiassetFungibility (170) */
    interface StagingXcmV2MultiassetFungibility extends Enum {
        readonly isFungible: boolean;
        readonly asFungible: Compact<u128>;
        readonly isNonFungible: boolean;
        readonly asNonFungible: StagingXcmV2MultiassetAssetInstance;
        readonly type: 'Fungible' | 'NonFungible';
    }
    /** @name StagingXcmV2MultiassetAssetInstance (171) */
    interface StagingXcmV2MultiassetAssetInstance extends Enum {
        readonly isUndefined: boolean;
        readonly isIndex: boolean;
        readonly asIndex: Compact<u128>;
        readonly isArray4: boolean;
        readonly asArray4: U8aFixed;
        readonly isArray8: boolean;
        readonly asArray8: U8aFixed;
        readonly isArray16: boolean;
        readonly asArray16: U8aFixed;
        readonly isArray32: boolean;
        readonly asArray32: U8aFixed;
        readonly isBlob: boolean;
        readonly asBlob: Bytes;
        readonly type: 'Undefined' | 'Index' | 'Array4' | 'Array8' | 'Array16' | 'Array32' | 'Blob';
    }
    /** @name StagingXcmV2Response (174) */
    interface StagingXcmV2Response extends Enum {
        readonly isNull: boolean;
        readonly isAssets: boolean;
        readonly asAssets: StagingXcmV2MultiassetMultiAssets;
        readonly isExecutionResult: boolean;
        readonly asExecutionResult: Option<ITuple<[u32, StagingXcmV2TraitsError]>>;
        readonly isVersion: boolean;
        readonly asVersion: u32;
        readonly type: 'Null' | 'Assets' | 'ExecutionResult' | 'Version';
    }
    /** @name StagingXcmV2TraitsError (177) */
    interface StagingXcmV2TraitsError extends Enum {
        readonly isOverflow: boolean;
        readonly isUnimplemented: boolean;
        readonly isUntrustedReserveLocation: boolean;
        readonly isUntrustedTeleportLocation: boolean;
        readonly isMultiLocationFull: boolean;
        readonly isMultiLocationNotInvertible: boolean;
        readonly isBadOrigin: boolean;
        readonly isInvalidLocation: boolean;
        readonly isAssetNotFound: boolean;
        readonly isFailedToTransactAsset: boolean;
        readonly isNotWithdrawable: boolean;
        readonly isLocationCannotHold: boolean;
        readonly isExceedsMaxMessageSize: boolean;
        readonly isDestinationUnsupported: boolean;
        readonly isTransport: boolean;
        readonly isUnroutable: boolean;
        readonly isUnknownClaim: boolean;
        readonly isFailedToDecode: boolean;
        readonly isMaxWeightInvalid: boolean;
        readonly isNotHoldingFees: boolean;
        readonly isTooExpensive: boolean;
        readonly isTrap: boolean;
        readonly asTrap: u64;
        readonly isUnhandledXcmVersion: boolean;
        readonly isWeightLimitReached: boolean;
        readonly asWeightLimitReached: u64;
        readonly isBarrier: boolean;
        readonly isWeightNotComputable: boolean;
        readonly type: 'Overflow' | 'Unimplemented' | 'UntrustedReserveLocation' | 'UntrustedTeleportLocation' | 'MultiLocationFull' | 'MultiLocationNotInvertible' | 'BadOrigin' | 'InvalidLocation' | 'AssetNotFound' | 'FailedToTransactAsset' | 'NotWithdrawable' | 'LocationCannotHold' | 'ExceedsMaxMessageSize' | 'DestinationUnsupported' | 'Transport' | 'Unroutable' | 'UnknownClaim' | 'FailedToDecode' | 'MaxWeightInvalid' | 'NotHoldingFees' | 'TooExpensive' | 'Trap' | 'UnhandledXcmVersion' | 'WeightLimitReached' | 'Barrier' | 'WeightNotComputable';
    }
    /** @name StagingXcmV2OriginKind (178) */
    interface StagingXcmV2OriginKind extends Enum {
        readonly isNative: boolean;
        readonly isSovereignAccount: boolean;
        readonly isSuperuser: boolean;
        readonly isXcm: boolean;
        readonly type: 'Native' | 'SovereignAccount' | 'Superuser' | 'Xcm';
    }
    /** @name StagingXcmDoubleEncoded (179) */
    interface StagingXcmDoubleEncoded extends Struct {
        readonly encoded: Bytes;
    }
    /** @name StagingXcmV2MultiassetMultiAssetFilter (180) */
    interface StagingXcmV2MultiassetMultiAssetFilter extends Enum {
        readonly isDefinite: boolean;
        readonly asDefinite: StagingXcmV2MultiassetMultiAssets;
        readonly isWild: boolean;
        readonly asWild: StagingXcmV2MultiassetWildMultiAsset;
        readonly type: 'Definite' | 'Wild';
    }
    /** @name StagingXcmV2MultiassetWildMultiAsset (181) */
    interface StagingXcmV2MultiassetWildMultiAsset extends Enum {
        readonly isAll: boolean;
        readonly isAllOf: boolean;
        readonly asAllOf: {
            readonly id: StagingXcmV2MultiassetAssetId;
            readonly fun: StagingXcmV2MultiassetWildFungibility;
        } & Struct;
        readonly type: 'All' | 'AllOf';
    }
    /** @name StagingXcmV2MultiassetWildFungibility (182) */
    interface StagingXcmV2MultiassetWildFungibility extends Enum {
        readonly isFungible: boolean;
        readonly isNonFungible: boolean;
        readonly type: 'Fungible' | 'NonFungible';
    }
    /** @name StagingXcmV2WeightLimit (183) */
    interface StagingXcmV2WeightLimit extends Enum {
        readonly isUnlimited: boolean;
        readonly isLimited: boolean;
        readonly asLimited: Compact<u64>;
        readonly type: 'Unlimited' | 'Limited';
    }
    /** @name StagingXcmV3Xcm (184) */
    interface StagingXcmV3Xcm extends Vec<StagingXcmV3Instruction> {
    }
    /** @name StagingXcmV3Instruction (186) */
    interface StagingXcmV3Instruction extends Enum {
        readonly isWithdrawAsset: boolean;
        readonly asWithdrawAsset: StagingXcmV3MultiassetMultiAssets;
        readonly isReserveAssetDeposited: boolean;
        readonly asReserveAssetDeposited: StagingXcmV3MultiassetMultiAssets;
        readonly isReceiveTeleportedAsset: boolean;
        readonly asReceiveTeleportedAsset: StagingXcmV3MultiassetMultiAssets;
        readonly isQueryResponse: boolean;
        readonly asQueryResponse: {
            readonly queryId: Compact<u64>;
            readonly response: StagingXcmV3Response;
            readonly maxWeight: SpWeightsWeightV2Weight;
            readonly querier: Option<StagingXcmV3MultiLocation>;
        } & Struct;
        readonly isTransferAsset: boolean;
        readonly asTransferAsset: {
            readonly assets: StagingXcmV3MultiassetMultiAssets;
            readonly beneficiary: StagingXcmV3MultiLocation;
        } & Struct;
        readonly isTransferReserveAsset: boolean;
        readonly asTransferReserveAsset: {
            readonly assets: StagingXcmV3MultiassetMultiAssets;
            readonly dest: StagingXcmV3MultiLocation;
            readonly xcm: StagingXcmV3Xcm;
        } & Struct;
        readonly isTransact: boolean;
        readonly asTransact: {
            readonly originKind: StagingXcmV2OriginKind;
            readonly requireWeightAtMost: SpWeightsWeightV2Weight;
            readonly call: StagingXcmDoubleEncoded;
        } & Struct;
        readonly isHrmpNewChannelOpenRequest: boolean;
        readonly asHrmpNewChannelOpenRequest: {
            readonly sender: Compact<u32>;
            readonly maxMessageSize: Compact<u32>;
            readonly maxCapacity: Compact<u32>;
        } & Struct;
        readonly isHrmpChannelAccepted: boolean;
        readonly asHrmpChannelAccepted: {
            readonly recipient: Compact<u32>;
        } & Struct;
        readonly isHrmpChannelClosing: boolean;
        readonly asHrmpChannelClosing: {
            readonly initiator: Compact<u32>;
            readonly sender: Compact<u32>;
            readonly recipient: Compact<u32>;
        } & Struct;
        readonly isClearOrigin: boolean;
        readonly isDescendOrigin: boolean;
        readonly asDescendOrigin: StagingXcmV3Junctions;
        readonly isReportError: boolean;
        readonly asReportError: StagingXcmV3QueryResponseInfo;
        readonly isDepositAsset: boolean;
        readonly asDepositAsset: {
            readonly assets: StagingXcmV3MultiassetMultiAssetFilter;
            readonly beneficiary: StagingXcmV3MultiLocation;
        } & Struct;
        readonly isDepositReserveAsset: boolean;
        readonly asDepositReserveAsset: {
            readonly assets: StagingXcmV3MultiassetMultiAssetFilter;
            readonly dest: StagingXcmV3MultiLocation;
            readonly xcm: StagingXcmV3Xcm;
        } & Struct;
        readonly isExchangeAsset: boolean;
        readonly asExchangeAsset: {
            readonly give: StagingXcmV3MultiassetMultiAssetFilter;
            readonly want: StagingXcmV3MultiassetMultiAssets;
            readonly maximal: bool;
        } & Struct;
        readonly isInitiateReserveWithdraw: boolean;
        readonly asInitiateReserveWithdraw: {
            readonly assets: StagingXcmV3MultiassetMultiAssetFilter;
            readonly reserve: StagingXcmV3MultiLocation;
            readonly xcm: StagingXcmV3Xcm;
        } & Struct;
        readonly isInitiateTeleport: boolean;
        readonly asInitiateTeleport: {
            readonly assets: StagingXcmV3MultiassetMultiAssetFilter;
            readonly dest: StagingXcmV3MultiLocation;
            readonly xcm: StagingXcmV3Xcm;
        } & Struct;
        readonly isReportHolding: boolean;
        readonly asReportHolding: {
            readonly responseInfo: StagingXcmV3QueryResponseInfo;
            readonly assets: StagingXcmV3MultiassetMultiAssetFilter;
        } & Struct;
        readonly isBuyExecution: boolean;
        readonly asBuyExecution: {
            readonly fees: StagingXcmV3MultiAsset;
            readonly weightLimit: StagingXcmV3WeightLimit;
        } & Struct;
        readonly isRefundSurplus: boolean;
        readonly isSetErrorHandler: boolean;
        readonly asSetErrorHandler: StagingXcmV3Xcm;
        readonly isSetAppendix: boolean;
        readonly asSetAppendix: StagingXcmV3Xcm;
        readonly isClearError: boolean;
        readonly isClaimAsset: boolean;
        readonly asClaimAsset: {
            readonly assets: StagingXcmV3MultiassetMultiAssets;
            readonly ticket: StagingXcmV3MultiLocation;
        } & Struct;
        readonly isTrap: boolean;
        readonly asTrap: Compact<u64>;
        readonly isSubscribeVersion: boolean;
        readonly asSubscribeVersion: {
            readonly queryId: Compact<u64>;
            readonly maxResponseWeight: SpWeightsWeightV2Weight;
        } & Struct;
        readonly isUnsubscribeVersion: boolean;
        readonly isBurnAsset: boolean;
        readonly asBurnAsset: StagingXcmV3MultiassetMultiAssets;
        readonly isExpectAsset: boolean;
        readonly asExpectAsset: StagingXcmV3MultiassetMultiAssets;
        readonly isExpectOrigin: boolean;
        readonly asExpectOrigin: Option<StagingXcmV3MultiLocation>;
        readonly isExpectError: boolean;
        readonly asExpectError: Option<ITuple<[u32, StagingXcmV3TraitsError]>>;
        readonly isExpectTransactStatus: boolean;
        readonly asExpectTransactStatus: StagingXcmV3MaybeErrorCode;
        readonly isQueryPallet: boolean;
        readonly asQueryPallet: {
            readonly moduleName: Bytes;
            readonly responseInfo: StagingXcmV3QueryResponseInfo;
        } & Struct;
        readonly isExpectPallet: boolean;
        readonly asExpectPallet: {
            readonly index: Compact<u32>;
            readonly name: Bytes;
            readonly moduleName: Bytes;
            readonly crateMajor: Compact<u32>;
            readonly minCrateMinor: Compact<u32>;
        } & Struct;
        readonly isReportTransactStatus: boolean;
        readonly asReportTransactStatus: StagingXcmV3QueryResponseInfo;
        readonly isClearTransactStatus: boolean;
        readonly isUniversalOrigin: boolean;
        readonly asUniversalOrigin: StagingXcmV3Junction;
        readonly isExportMessage: boolean;
        readonly asExportMessage: {
            readonly network: StagingXcmV3JunctionNetworkId;
            readonly destination: StagingXcmV3Junctions;
            readonly xcm: StagingXcmV3Xcm;
        } & Struct;
        readonly isLockAsset: boolean;
        readonly asLockAsset: {
            readonly asset: StagingXcmV3MultiAsset;
            readonly unlocker: StagingXcmV3MultiLocation;
        } & Struct;
        readonly isUnlockAsset: boolean;
        readonly asUnlockAsset: {
            readonly asset: StagingXcmV3MultiAsset;
            readonly target: StagingXcmV3MultiLocation;
        } & Struct;
        readonly isNoteUnlockable: boolean;
        readonly asNoteUnlockable: {
            readonly asset: StagingXcmV3MultiAsset;
            readonly owner: StagingXcmV3MultiLocation;
        } & Struct;
        readonly isRequestUnlock: boolean;
        readonly asRequestUnlock: {
            readonly asset: StagingXcmV3MultiAsset;
            readonly locker: StagingXcmV3MultiLocation;
        } & Struct;
        readonly isSetFeesMode: boolean;
        readonly asSetFeesMode: {
            readonly jitWithdraw: bool;
        } & Struct;
        readonly isSetTopic: boolean;
        readonly asSetTopic: U8aFixed;
        readonly isClearTopic: boolean;
        readonly isAliasOrigin: boolean;
        readonly asAliasOrigin: StagingXcmV3MultiLocation;
        readonly isUnpaidExecution: boolean;
        readonly asUnpaidExecution: {
            readonly weightLimit: StagingXcmV3WeightLimit;
            readonly checkOrigin: Option<StagingXcmV3MultiLocation>;
        } & Struct;
        readonly type: 'WithdrawAsset' | 'ReserveAssetDeposited' | 'ReceiveTeleportedAsset' | 'QueryResponse' | 'TransferAsset' | 'TransferReserveAsset' | 'Transact' | 'HrmpNewChannelOpenRequest' | 'HrmpChannelAccepted' | 'HrmpChannelClosing' | 'ClearOrigin' | 'DescendOrigin' | 'ReportError' | 'DepositAsset' | 'DepositReserveAsset' | 'ExchangeAsset' | 'InitiateReserveWithdraw' | 'InitiateTeleport' | 'ReportHolding' | 'BuyExecution' | 'RefundSurplus' | 'SetErrorHandler' | 'SetAppendix' | 'ClearError' | 'ClaimAsset' | 'Trap' | 'SubscribeVersion' | 'UnsubscribeVersion' | 'BurnAsset' | 'ExpectAsset' | 'ExpectOrigin' | 'ExpectError' | 'ExpectTransactStatus' | 'QueryPallet' | 'ExpectPallet' | 'ReportTransactStatus' | 'ClearTransactStatus' | 'UniversalOrigin' | 'ExportMessage' | 'LockAsset' | 'UnlockAsset' | 'NoteUnlockable' | 'RequestUnlock' | 'SetFeesMode' | 'SetTopic' | 'ClearTopic' | 'AliasOrigin' | 'UnpaidExecution';
    }
    /** @name StagingXcmV3MultiassetMultiAssets (187) */
    interface StagingXcmV3MultiassetMultiAssets extends Vec<StagingXcmV3MultiAsset> {
    }
    /** @name StagingXcmV3MultiAsset (189) */
    interface StagingXcmV3MultiAsset extends Struct {
        readonly id: StagingXcmV3MultiassetAssetId;
        readonly fun: StagingXcmV3MultiassetFungibility;
    }
    /** @name StagingXcmV3MultiassetAssetId (190) */
    interface StagingXcmV3MultiassetAssetId extends Enum {
        readonly isConcrete: boolean;
        readonly asConcrete: StagingXcmV3MultiLocation;
        readonly isAbstract: boolean;
        readonly asAbstract: U8aFixed;
        readonly type: 'Concrete' | 'Abstract';
    }
    /** @name StagingXcmV3MultiassetFungibility (191) */
    interface StagingXcmV3MultiassetFungibility extends Enum {
        readonly isFungible: boolean;
        readonly asFungible: Compact<u128>;
        readonly isNonFungible: boolean;
        readonly asNonFungible: StagingXcmV3MultiassetAssetInstance;
        readonly type: 'Fungible' | 'NonFungible';
    }
    /** @name StagingXcmV3MultiassetAssetInstance (192) */
    interface StagingXcmV3MultiassetAssetInstance extends Enum {
        readonly isUndefined: boolean;
        readonly isIndex: boolean;
        readonly asIndex: Compact<u128>;
        readonly isArray4: boolean;
        readonly asArray4: U8aFixed;
        readonly isArray8: boolean;
        readonly asArray8: U8aFixed;
        readonly isArray16: boolean;
        readonly asArray16: U8aFixed;
        readonly isArray32: boolean;
        readonly asArray32: U8aFixed;
        readonly type: 'Undefined' | 'Index' | 'Array4' | 'Array8' | 'Array16' | 'Array32';
    }
    /** @name StagingXcmV3Response (193) */
    interface StagingXcmV3Response extends Enum {
        readonly isNull: boolean;
        readonly isAssets: boolean;
        readonly asAssets: StagingXcmV3MultiassetMultiAssets;
        readonly isExecutionResult: boolean;
        readonly asExecutionResult: Option<ITuple<[u32, StagingXcmV3TraitsError]>>;
        readonly isVersion: boolean;
        readonly asVersion: u32;
        readonly isPalletsInfo: boolean;
        readonly asPalletsInfo: Vec<StagingXcmV3PalletInfo>;
        readonly isDispatchResult: boolean;
        readonly asDispatchResult: StagingXcmV3MaybeErrorCode;
        readonly type: 'Null' | 'Assets' | 'ExecutionResult' | 'Version' | 'PalletsInfo' | 'DispatchResult';
    }
    /** @name StagingXcmV3TraitsError (196) */
    interface StagingXcmV3TraitsError extends Enum {
        readonly isOverflow: boolean;
        readonly isUnimplemented: boolean;
        readonly isUntrustedReserveLocation: boolean;
        readonly isUntrustedTeleportLocation: boolean;
        readonly isLocationFull: boolean;
        readonly isLocationNotInvertible: boolean;
        readonly isBadOrigin: boolean;
        readonly isInvalidLocation: boolean;
        readonly isAssetNotFound: boolean;
        readonly isFailedToTransactAsset: boolean;
        readonly isNotWithdrawable: boolean;
        readonly isLocationCannotHold: boolean;
        readonly isExceedsMaxMessageSize: boolean;
        readonly isDestinationUnsupported: boolean;
        readonly isTransport: boolean;
        readonly isUnroutable: boolean;
        readonly isUnknownClaim: boolean;
        readonly isFailedToDecode: boolean;
        readonly isMaxWeightInvalid: boolean;
        readonly isNotHoldingFees: boolean;
        readonly isTooExpensive: boolean;
        readonly isTrap: boolean;
        readonly asTrap: u64;
        readonly isExpectationFalse: boolean;
        readonly isPalletNotFound: boolean;
        readonly isNameMismatch: boolean;
        readonly isVersionIncompatible: boolean;
        readonly isHoldingWouldOverflow: boolean;
        readonly isExportError: boolean;
        readonly isReanchorFailed: boolean;
        readonly isNoDeal: boolean;
        readonly isFeesNotMet: boolean;
        readonly isLockError: boolean;
        readonly isNoPermission: boolean;
        readonly isUnanchored: boolean;
        readonly isNotDepositable: boolean;
        readonly isUnhandledXcmVersion: boolean;
        readonly isWeightLimitReached: boolean;
        readonly asWeightLimitReached: SpWeightsWeightV2Weight;
        readonly isBarrier: boolean;
        readonly isWeightNotComputable: boolean;
        readonly isExceedsStackLimit: boolean;
        readonly type: 'Overflow' | 'Unimplemented' | 'UntrustedReserveLocation' | 'UntrustedTeleportLocation' | 'LocationFull' | 'LocationNotInvertible' | 'BadOrigin' | 'InvalidLocation' | 'AssetNotFound' | 'FailedToTransactAsset' | 'NotWithdrawable' | 'LocationCannotHold' | 'ExceedsMaxMessageSize' | 'DestinationUnsupported' | 'Transport' | 'Unroutable' | 'UnknownClaim' | 'FailedToDecode' | 'MaxWeightInvalid' | 'NotHoldingFees' | 'TooExpensive' | 'Trap' | 'ExpectationFalse' | 'PalletNotFound' | 'NameMismatch' | 'VersionIncompatible' | 'HoldingWouldOverflow' | 'ExportError' | 'ReanchorFailed' | 'NoDeal' | 'FeesNotMet' | 'LockError' | 'NoPermission' | 'Unanchored' | 'NotDepositable' | 'UnhandledXcmVersion' | 'WeightLimitReached' | 'Barrier' | 'WeightNotComputable' | 'ExceedsStackLimit';
    }
    /** @name StagingXcmV3PalletInfo (198) */
    interface StagingXcmV3PalletInfo extends Struct {
        readonly index: Compact<u32>;
        readonly name: Bytes;
        readonly moduleName: Bytes;
        readonly major: Compact<u32>;
        readonly minor: Compact<u32>;
        readonly patch: Compact<u32>;
    }
    /** @name StagingXcmV3MaybeErrorCode (201) */
    interface StagingXcmV3MaybeErrorCode extends Enum {
        readonly isSuccess: boolean;
        readonly isError: boolean;
        readonly asError: Bytes;
        readonly isTruncatedError: boolean;
        readonly asTruncatedError: Bytes;
        readonly type: 'Success' | 'Error' | 'TruncatedError';
    }
    /** @name StagingXcmV3QueryResponseInfo (204) */
    interface StagingXcmV3QueryResponseInfo extends Struct {
        readonly destination: StagingXcmV3MultiLocation;
        readonly queryId: Compact<u64>;
        readonly maxWeight: SpWeightsWeightV2Weight;
    }
    /** @name StagingXcmV3MultiassetMultiAssetFilter (205) */
    interface StagingXcmV3MultiassetMultiAssetFilter extends Enum {
        readonly isDefinite: boolean;
        readonly asDefinite: StagingXcmV3MultiassetMultiAssets;
        readonly isWild: boolean;
        readonly asWild: StagingXcmV3MultiassetWildMultiAsset;
        readonly type: 'Definite' | 'Wild';
    }
    /** @name StagingXcmV3MultiassetWildMultiAsset (206) */
    interface StagingXcmV3MultiassetWildMultiAsset extends Enum {
        readonly isAll: boolean;
        readonly isAllOf: boolean;
        readonly asAllOf: {
            readonly id: StagingXcmV3MultiassetAssetId;
            readonly fun: StagingXcmV3MultiassetWildFungibility;
        } & Struct;
        readonly isAllCounted: boolean;
        readonly asAllCounted: Compact<u32>;
        readonly isAllOfCounted: boolean;
        readonly asAllOfCounted: {
            readonly id: StagingXcmV3MultiassetAssetId;
            readonly fun: StagingXcmV3MultiassetWildFungibility;
            readonly count: Compact<u32>;
        } & Struct;
        readonly type: 'All' | 'AllOf' | 'AllCounted' | 'AllOfCounted';
    }
    /** @name StagingXcmV3MultiassetWildFungibility (207) */
    interface StagingXcmV3MultiassetWildFungibility extends Enum {
        readonly isFungible: boolean;
        readonly isNonFungible: boolean;
        readonly type: 'Fungible' | 'NonFungible';
    }
    /** @name StagingXcmV3WeightLimit (208) */
    interface StagingXcmV3WeightLimit extends Enum {
        readonly isUnlimited: boolean;
        readonly isLimited: boolean;
        readonly asLimited: SpWeightsWeightV2Weight;
        readonly type: 'Unlimited' | 'Limited';
    }
    /** @name StagingXcmVersionedMultiAssets (209) */
    interface StagingXcmVersionedMultiAssets extends Enum {
        readonly isV2: boolean;
        readonly asV2: StagingXcmV2MultiassetMultiAssets;
        readonly isV3: boolean;
        readonly asV3: StagingXcmV3MultiassetMultiAssets;
        readonly type: 'V2' | 'V3';
    }
    /** @name PalletEthereumCall (218) */
    interface PalletEthereumCall extends Enum {
        readonly isTransact: boolean;
        readonly asTransact: {
            readonly transaction: EthereumTransactionTransactionV2;
        } & Struct;
        readonly type: 'Transact';
    }
    /** @name EthereumTransactionTransactionV2 (219) */
    interface EthereumTransactionTransactionV2 extends Enum {
        readonly isLegacy: boolean;
        readonly asLegacy: EthereumTransactionLegacyTransaction;
        readonly isEip2930: boolean;
        readonly asEip2930: EthereumTransactionEip2930Transaction;
        readonly isEip1559: boolean;
        readonly asEip1559: EthereumTransactionEip1559Transaction;
        readonly type: 'Legacy' | 'Eip2930' | 'Eip1559';
    }
    /** @name EthereumTransactionLegacyTransaction (220) */
    interface EthereumTransactionLegacyTransaction extends Struct {
        readonly nonce: U256;
        readonly gasPrice: U256;
        readonly gasLimit: U256;
        readonly action: EthereumTransactionTransactionAction;
        readonly value: U256;
        readonly input: Bytes;
        readonly signature: EthereumTransactionTransactionSignature;
    }
    /** @name EthereumTransactionTransactionAction (223) */
    interface EthereumTransactionTransactionAction extends Enum {
        readonly isCall: boolean;
        readonly asCall: H160;
        readonly isCreate: boolean;
        readonly type: 'Call' | 'Create';
    }
    /** @name EthereumTransactionTransactionSignature (224) */
    interface EthereumTransactionTransactionSignature extends Struct {
        readonly v: u64;
        readonly r: H256;
        readonly s: H256;
    }
    /** @name EthereumTransactionEip2930Transaction (226) */
    interface EthereumTransactionEip2930Transaction extends Struct {
        readonly chainId: u64;
        readonly nonce: U256;
        readonly gasPrice: U256;
        readonly gasLimit: U256;
        readonly action: EthereumTransactionTransactionAction;
        readonly value: U256;
        readonly input: Bytes;
        readonly accessList: Vec<EthereumTransactionAccessListItem>;
        readonly oddYParity: bool;
        readonly r: H256;
        readonly s: H256;
    }
    /** @name EthereumTransactionAccessListItem (228) */
    interface EthereumTransactionAccessListItem extends Struct {
        readonly address: H160;
        readonly storageKeys: Vec<H256>;
    }
    /** @name EthereumTransactionEip1559Transaction (230) */
    interface EthereumTransactionEip1559Transaction extends Struct {
        readonly chainId: u64;
        readonly nonce: U256;
        readonly maxPriorityFeePerGas: U256;
        readonly maxFeePerGas: U256;
        readonly gasLimit: U256;
        readonly action: EthereumTransactionTransactionAction;
        readonly value: U256;
        readonly input: Bytes;
        readonly accessList: Vec<EthereumTransactionAccessListItem>;
        readonly oddYParity: bool;
        readonly r: H256;
        readonly s: H256;
    }
    /** @name PalletEvmCall (231) */
    interface PalletEvmCall extends Enum {
        readonly isWithdraw: boolean;
        readonly asWithdraw: {
            readonly address: H160;
            readonly value: u128;
        } & Struct;
        readonly isCall: boolean;
        readonly asCall: {
            readonly source: H160;
            readonly target: H160;
            readonly input: Bytes;
            readonly value: U256;
            readonly gasLimit: u64;
            readonly maxFeePerGas: U256;
            readonly maxPriorityFeePerGas: Option<U256>;
            readonly nonce: Option<U256>;
            readonly accessList: Vec<ITuple<[H160, Vec<H256>]>>;
        } & Struct;
        readonly isCreate: boolean;
        readonly asCreate: {
            readonly source: H160;
            readonly init: Bytes;
            readonly value: U256;
            readonly gasLimit: u64;
            readonly maxFeePerGas: U256;
            readonly maxPriorityFeePerGas: Option<U256>;
            readonly nonce: Option<U256>;
            readonly accessList: Vec<ITuple<[H160, Vec<H256>]>>;
        } & Struct;
        readonly isCreate2: boolean;
        readonly asCreate2: {
            readonly source: H160;
            readonly init: Bytes;
            readonly salt: H256;
            readonly value: U256;
            readonly gasLimit: u64;
            readonly maxFeePerGas: U256;
            readonly maxPriorityFeePerGas: Option<U256>;
            readonly nonce: Option<U256>;
            readonly accessList: Vec<ITuple<[H160, Vec<H256>]>>;
        } & Struct;
        readonly type: 'Withdraw' | 'Call' | 'Create' | 'Create2';
    }
    /** @name PalletBaseFeeCall (235) */
    interface PalletBaseFeeCall extends Enum {
        readonly isSetBaseFeePerGas: boolean;
        readonly asSetBaseFeePerGas: {
            readonly fee: U256;
        } & Struct;
        readonly isSetElasticity: boolean;
        readonly asSetElasticity: {
            readonly elasticity: Permill;
        } & Struct;
        readonly type: 'SetBaseFeePerGas' | 'SetElasticity';
    }
    /** @name PalletConvictionVotingTally (239) */
    interface PalletConvictionVotingTally extends Struct {
        readonly ayes: u128;
        readonly nays: u128;
        readonly support: u128;
    }
    /** @name PalletWhitelistEvent (240) */
    interface PalletWhitelistEvent extends Enum {
        readonly isCallWhitelisted: boolean;
        readonly asCallWhitelisted: {
            readonly callHash: H256;
        } & Struct;
        readonly isWhitelistedCallRemoved: boolean;
        readonly asWhitelistedCallRemoved: {
            readonly callHash: H256;
        } & Struct;
        readonly isWhitelistedCallDispatched: boolean;
        readonly asWhitelistedCallDispatched: {
            readonly callHash: H256;
            readonly result: Result<FrameSupportDispatchPostDispatchInfo, SpRuntimeDispatchErrorWithPostInfo>;
        } & Struct;
        readonly type: 'CallWhitelisted' | 'WhitelistedCallRemoved' | 'WhitelistedCallDispatched';
    }
    /** @name FrameSupportDispatchPostDispatchInfo (242) */
    interface FrameSupportDispatchPostDispatchInfo extends Struct {
        readonly actualWeight: Option<SpWeightsWeightV2Weight>;
        readonly paysFee: FrameSupportDispatchPays;
    }
    /** @name SpRuntimeDispatchErrorWithPostInfo (244) */
    interface SpRuntimeDispatchErrorWithPostInfo extends Struct {
        readonly postInfo: FrameSupportDispatchPostDispatchInfo;
        readonly error: SpRuntimeDispatchError;
    }
    /** @name PalletMultisigEvent (245) */
    interface PalletMultisigEvent extends Enum {
        readonly isNewMultisig: boolean;
        readonly asNewMultisig: {
            readonly approving: AccountId32;
            readonly multisig: AccountId32;
            readonly callHash: U8aFixed;
        } & Struct;
        readonly isMultisigApproval: boolean;
        readonly asMultisigApproval: {
            readonly approving: AccountId32;
            readonly timepoint: PalletMultisigTimepoint;
            readonly multisig: AccountId32;
            readonly callHash: U8aFixed;
        } & Struct;
        readonly isMultisigExecuted: boolean;
        readonly asMultisigExecuted: {
            readonly approving: AccountId32;
            readonly timepoint: PalletMultisigTimepoint;
            readonly multisig: AccountId32;
            readonly callHash: U8aFixed;
            readonly result: Result<Null, SpRuntimeDispatchError>;
        } & Struct;
        readonly isMultisigCancelled: boolean;
        readonly asMultisigCancelled: {
            readonly cancelling: AccountId32;
            readonly timepoint: PalletMultisigTimepoint;
            readonly multisig: AccountId32;
            readonly callHash: U8aFixed;
        } & Struct;
        readonly type: 'NewMultisig' | 'MultisigApproval' | 'MultisigExecuted' | 'MultisigCancelled';
    }
    /** @name PalletSudoEvent (247) */
    interface PalletSudoEvent extends Enum {
        readonly isSudid: boolean;
        readonly asSudid: {
            readonly sudoResult: Result<Null, SpRuntimeDispatchError>;
        } & Struct;
        readonly isKeyChanged: boolean;
        readonly asKeyChanged: {
            readonly oldSudoer: Option<AccountId32>;
        } & Struct;
        readonly isSudoAsDone: boolean;
        readonly asSudoAsDone: {
            readonly sudoResult: Result<Null, SpRuntimeDispatchError>;
        } & Struct;
        readonly type: 'Sudid' | 'KeyChanged' | 'SudoAsDone';
    }
    /** @name PalletTxPauseEvent (249) */
    interface PalletTxPauseEvent extends Enum {
        readonly isCallPaused: boolean;
        readonly asCallPaused: {
            readonly fullName: ITuple<[Bytes, Bytes]>;
        } & Struct;
        readonly isCallUnpaused: boolean;
        readonly asCallUnpaused: {
            readonly fullName: ITuple<[Bytes, Bytes]>;
        } & Struct;
        readonly type: 'CallPaused' | 'CallUnpaused';
    }
    /** @name PalletSchedulerEvent (250) */
    interface PalletSchedulerEvent extends Enum {
        readonly isScheduled: boolean;
        readonly asScheduled: {
            readonly when: u64;
            readonly index: u32;
        } & Struct;
        readonly isCanceled: boolean;
        readonly asCanceled: {
            readonly when: u64;
            readonly index: u32;
        } & Struct;
        readonly isDispatched: boolean;
        readonly asDispatched: {
            readonly task: ITuple<[u64, u32]>;
            readonly id: Option<U8aFixed>;
            readonly result: Result<Null, SpRuntimeDispatchError>;
        } & Struct;
        readonly isCallUnavailable: boolean;
        readonly asCallUnavailable: {
            readonly task: ITuple<[u64, u32]>;
            readonly id: Option<U8aFixed>;
        } & Struct;
        readonly isPeriodicFailed: boolean;
        readonly asPeriodicFailed: {
            readonly task: ITuple<[u64, u32]>;
            readonly id: Option<U8aFixed>;
        } & Struct;
        readonly isPermanentlyOverweight: boolean;
        readonly asPermanentlyOverweight: {
            readonly task: ITuple<[u64, u32]>;
            readonly id: Option<U8aFixed>;
        } & Struct;
        readonly type: 'Scheduled' | 'Canceled' | 'Dispatched' | 'CallUnavailable' | 'PeriodicFailed' | 'PermanentlyOverweight';
    }
    /** @name PalletPreimageEvent (251) */
    interface PalletPreimageEvent extends Enum {
        readonly isNoted: boolean;
        readonly asNoted: {
            readonly hash_: H256;
        } & Struct;
        readonly isRequested: boolean;
        readonly asRequested: {
            readonly hash_: H256;
        } & Struct;
        readonly isCleared: boolean;
        readonly asCleared: {
            readonly hash_: H256;
        } & Struct;
        readonly type: 'Noted' | 'Requested' | 'Cleared';
    }
    /** @name PalletAccessEvent (253) */
    interface PalletAccessEvent extends Enum {
        readonly isRoleGranted: boolean;
        readonly asRoleGranted: {
            readonly account: AccountId32;
            readonly role: AutographParachainRuntimeRole;
        } & Struct;
        readonly isRoleTaken: boolean;
        readonly asRoleTaken: {
            readonly account: AccountId32;
            readonly role: AutographParachainRuntimeRole;
        } & Struct;
        readonly type: 'RoleGranted' | 'RoleTaken';
    }
    /** @name PalletCommonEvent (254) */
    interface PalletCommonEvent extends Enum {
        readonly isCollectionCreated: boolean;
        readonly asCollectionCreated: ITuple<[u32, u8, AccountId32]>;
        readonly isCollectionDestroyed: boolean;
        readonly asCollectionDestroyed: u32;
        readonly isItemCreated: boolean;
        readonly asItemCreated: ITuple<[u32, u32, AccountId32, u128]>;
        readonly isItemDestroyed: boolean;
        readonly asItemDestroyed: ITuple<[u32, u32, AccountId32, u128]>;
        readonly isTransfer: boolean;
        readonly asTransfer: ITuple<[u32, u32, AccountId32, AccountId32, u128]>;
        readonly isApproved: boolean;
        readonly asApproved: ITuple<[u32, u32, AccountId32, AccountId32, u128]>;
        readonly isCollectionPropertySet: boolean;
        readonly asCollectionPropertySet: ITuple<[u32, Bytes]>;
        readonly isCollectionPropertyDeleted: boolean;
        readonly asCollectionPropertyDeleted: ITuple<[u32, Bytes]>;
        readonly isTokenPropertySet: boolean;
        readonly asTokenPropertySet: ITuple<[u32, u32, Bytes]>;
        readonly isTokenPropertyDeleted: boolean;
        readonly asTokenPropertyDeleted: ITuple<[u32, u32, Bytes]>;
        readonly isPropertyPermissionSet: boolean;
        readonly asPropertyPermissionSet: ITuple<[u32, Bytes]>;
        readonly type: 'CollectionCreated' | 'CollectionDestroyed' | 'ItemCreated' | 'ItemDestroyed' | 'Transfer' | 'Approved' | 'CollectionPropertySet' | 'CollectionPropertyDeleted' | 'TokenPropertySet' | 'TokenPropertyDeleted' | 'PropertyPermissionSet';
    }
    /** @name CumulusPalletXcmpQueueEvent (255) */
    interface CumulusPalletXcmpQueueEvent extends Enum {
        readonly isSuccess: boolean;
        readonly asSuccess: {
            readonly messageHash: U8aFixed;
            readonly messageId: U8aFixed;
            readonly weight: SpWeightsWeightV2Weight;
        } & Struct;
        readonly isFail: boolean;
        readonly asFail: {
            readonly messageHash: U8aFixed;
            readonly messageId: U8aFixed;
            readonly error: StagingXcmV3TraitsError;
            readonly weight: SpWeightsWeightV2Weight;
        } & Struct;
        readonly isBadVersion: boolean;
        readonly asBadVersion: {
            readonly messageHash: U8aFixed;
        } & Struct;
        readonly isBadFormat: boolean;
        readonly asBadFormat: {
            readonly messageHash: U8aFixed;
        } & Struct;
        readonly isXcmpMessageSent: boolean;
        readonly asXcmpMessageSent: {
            readonly messageHash: U8aFixed;
        } & Struct;
        readonly isOverweightEnqueued: boolean;
        readonly asOverweightEnqueued: {
            readonly sender: u32;
            readonly sentAt: u32;
            readonly index: u64;
            readonly required: SpWeightsWeightV2Weight;
        } & Struct;
        readonly isOverweightServiced: boolean;
        readonly asOverweightServiced: {
            readonly index: u64;
            readonly used: SpWeightsWeightV2Weight;
        } & Struct;
        readonly type: 'Success' | 'Fail' | 'BadVersion' | 'BadFormat' | 'XcmpMessageSent' | 'OverweightEnqueued' | 'OverweightServiced';
    }
    /** @name CumulusPalletXcmEvent (256) */
    interface CumulusPalletXcmEvent extends Enum {
        readonly isInvalidFormat: boolean;
        readonly asInvalidFormat: U8aFixed;
        readonly isUnsupportedVersion: boolean;
        readonly asUnsupportedVersion: U8aFixed;
        readonly isExecutedDownward: boolean;
        readonly asExecutedDownward: ITuple<[U8aFixed, StagingXcmV3TraitsOutcome]>;
        readonly type: 'InvalidFormat' | 'UnsupportedVersion' | 'ExecutedDownward';
    }
    /** @name StagingXcmV3TraitsOutcome (257) */
    interface StagingXcmV3TraitsOutcome extends Enum {
        readonly isComplete: boolean;
        readonly asComplete: SpWeightsWeightV2Weight;
        readonly isIncomplete: boolean;
        readonly asIncomplete: ITuple<[SpWeightsWeightV2Weight, StagingXcmV3TraitsError]>;
        readonly isError: boolean;
        readonly asError: StagingXcmV3TraitsError;
        readonly type: 'Complete' | 'Incomplete' | 'Error';
    }
    /** @name CumulusPalletDmpQueueEvent (258) */
    interface CumulusPalletDmpQueueEvent extends Enum {
        readonly isInvalidFormat: boolean;
        readonly asInvalidFormat: {
            readonly messageHash: U8aFixed;
        } & Struct;
        readonly isUnsupportedVersion: boolean;
        readonly asUnsupportedVersion: {
            readonly messageHash: U8aFixed;
        } & Struct;
        readonly isExecutedDownward: boolean;
        readonly asExecutedDownward: {
            readonly messageHash: U8aFixed;
            readonly messageId: U8aFixed;
            readonly outcome: StagingXcmV3TraitsOutcome;
        } & Struct;
        readonly isWeightExhausted: boolean;
        readonly asWeightExhausted: {
            readonly messageHash: U8aFixed;
            readonly messageId: U8aFixed;
            readonly remainingWeight: SpWeightsWeightV2Weight;
            readonly requiredWeight: SpWeightsWeightV2Weight;
        } & Struct;
        readonly isOverweightEnqueued: boolean;
        readonly asOverweightEnqueued: {
            readonly messageHash: U8aFixed;
            readonly messageId: U8aFixed;
            readonly overweightIndex: u64;
            readonly requiredWeight: SpWeightsWeightV2Weight;
        } & Struct;
        readonly isOverweightServiced: boolean;
        readonly asOverweightServiced: {
            readonly overweightIndex: u64;
            readonly weightUsed: SpWeightsWeightV2Weight;
        } & Struct;
        readonly isMaxMessagesExhausted: boolean;
        readonly asMaxMessagesExhausted: {
            readonly messageHash: U8aFixed;
        } & Struct;
        readonly type: 'InvalidFormat' | 'UnsupportedVersion' | 'ExecutedDownward' | 'WeightExhausted' | 'OverweightEnqueued' | 'OverweightServiced' | 'MaxMessagesExhausted';
    }
    /** @name PalletXcmEvent (259) */
    interface PalletXcmEvent extends Enum {
        readonly isAttempted: boolean;
        readonly asAttempted: {
            readonly outcome: StagingXcmV3TraitsOutcome;
        } & Struct;
        readonly isSent: boolean;
        readonly asSent: {
            readonly origin: StagingXcmV3MultiLocation;
            readonly destination: StagingXcmV3MultiLocation;
            readonly message: StagingXcmV3Xcm;
            readonly messageId: U8aFixed;
        } & Struct;
        readonly isUnexpectedResponse: boolean;
        readonly asUnexpectedResponse: {
            readonly origin: StagingXcmV3MultiLocation;
            readonly queryId: u64;
        } & Struct;
        readonly isResponseReady: boolean;
        readonly asResponseReady: {
            readonly queryId: u64;
            readonly response: StagingXcmV3Response;
        } & Struct;
        readonly isNotified: boolean;
        readonly asNotified: {
            readonly queryId: u64;
            readonly palletIndex: u8;
            readonly callIndex: u8;
        } & Struct;
        readonly isNotifyOverweight: boolean;
        readonly asNotifyOverweight: {
            readonly queryId: u64;
            readonly palletIndex: u8;
            readonly callIndex: u8;
            readonly actualWeight: SpWeightsWeightV2Weight;
            readonly maxBudgetedWeight: SpWeightsWeightV2Weight;
        } & Struct;
        readonly isNotifyDispatchError: boolean;
        readonly asNotifyDispatchError: {
            readonly queryId: u64;
            readonly palletIndex: u8;
            readonly callIndex: u8;
        } & Struct;
        readonly isNotifyDecodeFailed: boolean;
        readonly asNotifyDecodeFailed: {
            readonly queryId: u64;
            readonly palletIndex: u8;
            readonly callIndex: u8;
        } & Struct;
        readonly isInvalidResponder: boolean;
        readonly asInvalidResponder: {
            readonly origin: StagingXcmV3MultiLocation;
            readonly queryId: u64;
            readonly expectedLocation: Option<StagingXcmV3MultiLocation>;
        } & Struct;
        readonly isInvalidResponderVersion: boolean;
        readonly asInvalidResponderVersion: {
            readonly origin: StagingXcmV3MultiLocation;
            readonly queryId: u64;
        } & Struct;
        readonly isResponseTaken: boolean;
        readonly asResponseTaken: {
            readonly queryId: u64;
        } & Struct;
        readonly isAssetsTrapped: boolean;
        readonly asAssetsTrapped: {
            readonly hash_: H256;
            readonly origin: StagingXcmV3MultiLocation;
            readonly assets: StagingXcmVersionedMultiAssets;
        } & Struct;
        readonly isVersionChangeNotified: boolean;
        readonly asVersionChangeNotified: {
            readonly destination: StagingXcmV3MultiLocation;
            readonly result: u32;
            readonly cost: StagingXcmV3MultiassetMultiAssets;
            readonly messageId: U8aFixed;
        } & Struct;
        readonly isSupportedVersionChanged: boolean;
        readonly asSupportedVersionChanged: {
            readonly location: StagingXcmV3MultiLocation;
            readonly version: u32;
        } & Struct;
        readonly isNotifyTargetSendFail: boolean;
        readonly asNotifyTargetSendFail: {
            readonly location: StagingXcmV3MultiLocation;
            readonly queryId: u64;
            readonly error: StagingXcmV3TraitsError;
        } & Struct;
        readonly isNotifyTargetMigrationFail: boolean;
        readonly asNotifyTargetMigrationFail: {
            readonly location: StagingXcmVersionedMultiLocation;
            readonly queryId: u64;
        } & Struct;
        readonly isInvalidQuerierVersion: boolean;
        readonly asInvalidQuerierVersion: {
            readonly origin: StagingXcmV3MultiLocation;
            readonly queryId: u64;
        } & Struct;
        readonly isInvalidQuerier: boolean;
        readonly asInvalidQuerier: {
            readonly origin: StagingXcmV3MultiLocation;
            readonly queryId: u64;
            readonly expectedQuerier: StagingXcmV3MultiLocation;
            readonly maybeActualQuerier: Option<StagingXcmV3MultiLocation>;
        } & Struct;
        readonly isVersionNotifyStarted: boolean;
        readonly asVersionNotifyStarted: {
            readonly destination: StagingXcmV3MultiLocation;
            readonly cost: StagingXcmV3MultiassetMultiAssets;
            readonly messageId: U8aFixed;
        } & Struct;
        readonly isVersionNotifyRequested: boolean;
        readonly asVersionNotifyRequested: {
            readonly destination: StagingXcmV3MultiLocation;
            readonly cost: StagingXcmV3MultiassetMultiAssets;
            readonly messageId: U8aFixed;
        } & Struct;
        readonly isVersionNotifyUnrequested: boolean;
        readonly asVersionNotifyUnrequested: {
            readonly destination: StagingXcmV3MultiLocation;
            readonly cost: StagingXcmV3MultiassetMultiAssets;
            readonly messageId: U8aFixed;
        } & Struct;
        readonly isFeesPaid: boolean;
        readonly asFeesPaid: {
            readonly paying: StagingXcmV3MultiLocation;
            readonly fees: StagingXcmV3MultiassetMultiAssets;
        } & Struct;
        readonly isAssetsClaimed: boolean;
        readonly asAssetsClaimed: {
            readonly hash_: H256;
            readonly origin: StagingXcmV3MultiLocation;
            readonly assets: StagingXcmVersionedMultiAssets;
        } & Struct;
        readonly type: 'Attempted' | 'Sent' | 'UnexpectedResponse' | 'ResponseReady' | 'Notified' | 'NotifyOverweight' | 'NotifyDispatchError' | 'NotifyDecodeFailed' | 'InvalidResponder' | 'InvalidResponderVersion' | 'ResponseTaken' | 'AssetsTrapped' | 'VersionChangeNotified' | 'SupportedVersionChanged' | 'NotifyTargetSendFail' | 'NotifyTargetMigrationFail' | 'InvalidQuerierVersion' | 'InvalidQuerier' | 'VersionNotifyStarted' | 'VersionNotifyRequested' | 'VersionNotifyUnrequested' | 'FeesPaid' | 'AssetsClaimed';
    }
    /** @name PalletEthereumEvent (260) */
    interface PalletEthereumEvent extends Enum {
        readonly isExecuted: boolean;
        readonly asExecuted: {
            readonly from: H160;
            readonly to: H160;
            readonly transactionHash: H256;
            readonly exitReason: EvmCoreErrorExitReason;
            readonly extraData: Bytes;
        } & Struct;
        readonly type: 'Executed';
    }
    /** @name EvmCoreErrorExitReason (261) */
    interface EvmCoreErrorExitReason extends Enum {
        readonly isSucceed: boolean;
        readonly asSucceed: EvmCoreErrorExitSucceed;
        readonly isError: boolean;
        readonly asError: EvmCoreErrorExitError;
        readonly isRevert: boolean;
        readonly asRevert: EvmCoreErrorExitRevert;
        readonly isFatal: boolean;
        readonly asFatal: EvmCoreErrorExitFatal;
        readonly type: 'Succeed' | 'Error' | 'Revert' | 'Fatal';
    }
    /** @name EvmCoreErrorExitSucceed (262) */
    interface EvmCoreErrorExitSucceed extends Enum {
        readonly isStopped: boolean;
        readonly isReturned: boolean;
        readonly isSuicided: boolean;
        readonly type: 'Stopped' | 'Returned' | 'Suicided';
    }
    /** @name EvmCoreErrorExitError (263) */
    interface EvmCoreErrorExitError extends Enum {
        readonly isStackUnderflow: boolean;
        readonly isStackOverflow: boolean;
        readonly isInvalidJump: boolean;
        readonly isInvalidRange: boolean;
        readonly isDesignatedInvalid: boolean;
        readonly isCallTooDeep: boolean;
        readonly isCreateCollision: boolean;
        readonly isCreateContractLimit: boolean;
        readonly isOutOfOffset: boolean;
        readonly isOutOfGas: boolean;
        readonly isOutOfFund: boolean;
        readonly isPcUnderflow: boolean;
        readonly isCreateEmpty: boolean;
        readonly isOther: boolean;
        readonly asOther: Text;
        readonly isMaxNonce: boolean;
        readonly isInvalidCode: boolean;
        readonly asInvalidCode: u8;
        readonly type: 'StackUnderflow' | 'StackOverflow' | 'InvalidJump' | 'InvalidRange' | 'DesignatedInvalid' | 'CallTooDeep' | 'CreateCollision' | 'CreateContractLimit' | 'OutOfOffset' | 'OutOfGas' | 'OutOfFund' | 'PcUnderflow' | 'CreateEmpty' | 'Other' | 'MaxNonce' | 'InvalidCode';
    }
    /** @name EvmCoreErrorExitRevert (267) */
    interface EvmCoreErrorExitRevert extends Enum {
        readonly isReverted: boolean;
        readonly type: 'Reverted';
    }
    /** @name EvmCoreErrorExitFatal (268) */
    interface EvmCoreErrorExitFatal extends Enum {
        readonly isNotSupported: boolean;
        readonly isUnhandledInterrupt: boolean;
        readonly isCallErrorAsFatal: boolean;
        readonly asCallErrorAsFatal: EvmCoreErrorExitError;
        readonly isOther: boolean;
        readonly asOther: Text;
        readonly type: 'NotSupported' | 'UnhandledInterrupt' | 'CallErrorAsFatal' | 'Other';
    }
    /** @name PalletEvmEvent (269) */
    interface PalletEvmEvent extends Enum {
        readonly isLog: boolean;
        readonly asLog: {
            readonly log: EthereumLog;
        } & Struct;
        readonly isCreated: boolean;
        readonly asCreated: {
            readonly address: H160;
        } & Struct;
        readonly isCreatedFailed: boolean;
        readonly asCreatedFailed: {
            readonly address: H160;
        } & Struct;
        readonly isExecuted: boolean;
        readonly asExecuted: {
            readonly address: H160;
        } & Struct;
        readonly isExecutedFailed: boolean;
        readonly asExecutedFailed: {
            readonly address: H160;
        } & Struct;
        readonly type: 'Log' | 'Created' | 'CreatedFailed' | 'Executed' | 'ExecutedFailed';
    }
    /** @name EthereumLog (270) */
    interface EthereumLog extends Struct {
        readonly address: H160;
        readonly topics: Vec<H256>;
        readonly data: Bytes;
    }
    /** @name PalletBaseFeeEvent (271) */
    interface PalletBaseFeeEvent extends Enum {
        readonly isNewBaseFeePerGas: boolean;
        readonly asNewBaseFeePerGas: {
            readonly fee: U256;
        } & Struct;
        readonly isBaseFeeOverflow: boolean;
        readonly isNewElasticity: boolean;
        readonly asNewElasticity: {
            readonly elasticity: Permill;
        } & Struct;
        readonly type: 'NewBaseFeePerGas' | 'BaseFeeOverflow' | 'NewElasticity';
    }
    /** @name FrameSystemPhase (272) */
    interface FrameSystemPhase extends Enum {
        readonly isApplyExtrinsic: boolean;
        readonly asApplyExtrinsic: u32;
        readonly isFinalization: boolean;
        readonly isInitialization: boolean;
        readonly type: 'ApplyExtrinsic' | 'Finalization' | 'Initialization';
    }
    /** @name FrameSystemLastRuntimeUpgradeInfo (274) */
    interface FrameSystemLastRuntimeUpgradeInfo extends Struct {
        readonly specVersion: Compact<u32>;
        readonly specName: Text;
    }
    /** @name FrameSystemLimitsBlockWeights (275) */
    interface FrameSystemLimitsBlockWeights extends Struct {
        readonly baseBlock: SpWeightsWeightV2Weight;
        readonly maxBlock: SpWeightsWeightV2Weight;
        readonly perClass: FrameSupportDispatchPerDispatchClassWeightsPerClass;
    }
    /** @name FrameSupportDispatchPerDispatchClassWeightsPerClass (276) */
    interface FrameSupportDispatchPerDispatchClassWeightsPerClass extends Struct {
        readonly normal: FrameSystemLimitsWeightsPerClass;
        readonly operational: FrameSystemLimitsWeightsPerClass;
        readonly mandatory: FrameSystemLimitsWeightsPerClass;
    }
    /** @name FrameSystemLimitsWeightsPerClass (277) */
    interface FrameSystemLimitsWeightsPerClass extends Struct {
        readonly baseExtrinsic: SpWeightsWeightV2Weight;
        readonly maxExtrinsic: Option<SpWeightsWeightV2Weight>;
        readonly maxTotal: Option<SpWeightsWeightV2Weight>;
        readonly reserved: Option<SpWeightsWeightV2Weight>;
    }
    /** @name FrameSystemLimitsBlockLength (278) */
    interface FrameSystemLimitsBlockLength extends Struct {
        readonly max: FrameSupportDispatchPerDispatchClassU32;
    }
    /** @name FrameSupportDispatchPerDispatchClassU32 (279) */
    interface FrameSupportDispatchPerDispatchClassU32 extends Struct {
        readonly normal: u32;
        readonly operational: u32;
        readonly mandatory: u32;
    }
    /** @name SpWeightsRuntimeDbWeight (280) */
    interface SpWeightsRuntimeDbWeight extends Struct {
        readonly read: u64;
        readonly write: u64;
    }
    /** @name SpVersionRuntimeVersion (281) */
    interface SpVersionRuntimeVersion extends Struct {
        readonly specName: Text;
        readonly implName: Text;
        readonly authoringVersion: u32;
        readonly specVersion: u32;
        readonly implVersion: u32;
        readonly apis: Vec<ITuple<[U8aFixed, u32]>>;
        readonly transactionVersion: u32;
        readonly stateVersion: u8;
    }
    /** @name FrameSystemError (285) */
    interface FrameSystemError extends Enum {
        readonly isInvalidSpecName: boolean;
        readonly isSpecVersionNeedsToIncrease: boolean;
        readonly isFailedToExtractRuntimeVersion: boolean;
        readonly isNonDefaultComposite: boolean;
        readonly isNonZeroRefCount: boolean;
        readonly isCallFiltered: boolean;
        readonly type: 'InvalidSpecName' | 'SpecVersionNeedsToIncrease' | 'FailedToExtractRuntimeVersion' | 'NonDefaultComposite' | 'NonZeroRefCount' | 'CallFiltered';
    }
    /** @name CumulusPalletParachainSystemUnincludedSegmentAncestor (287) */
    interface CumulusPalletParachainSystemUnincludedSegmentAncestor extends Struct {
        readonly usedBandwidth: CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth;
        readonly paraHeadHash: Option<H256>;
        readonly consumedGoAheadSignal: Option<PolkadotPrimitivesV5UpgradeGoAhead>;
    }
    /** @name CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth (288) */
    interface CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth extends Struct {
        readonly umpMsgCount: u32;
        readonly umpTotalBytes: u32;
        readonly hrmpOutgoing: BTreeMap<u32, CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate>;
    }
    /** @name CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate (290) */
    interface CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate extends Struct {
        readonly msgCount: u32;
        readonly totalBytes: u32;
    }
    /** @name PolkadotPrimitivesV5UpgradeGoAhead (294) */
    interface PolkadotPrimitivesV5UpgradeGoAhead extends Enum {
        readonly isAbort: boolean;
        readonly isGoAhead: boolean;
        readonly type: 'Abort' | 'GoAhead';
    }
    /** @name CumulusPalletParachainSystemUnincludedSegmentSegmentTracker (295) */
    interface CumulusPalletParachainSystemUnincludedSegmentSegmentTracker extends Struct {
        readonly usedBandwidth: CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth;
        readonly hrmpWatermark: Option<u32>;
        readonly consumedGoAheadSignal: Option<PolkadotPrimitivesV5UpgradeGoAhead>;
    }
    /** @name PolkadotPrimitivesV5UpgradeRestriction (297) */
    interface PolkadotPrimitivesV5UpgradeRestriction extends Enum {
        readonly isPresent: boolean;
        readonly type: 'Present';
    }
    /** @name CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot (298) */
    interface CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot extends Struct {
        readonly dmqMqcHead: H256;
        readonly relayDispatchQueueRemainingCapacity: CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity;
        readonly ingressChannels: Vec<ITuple<[u32, PolkadotPrimitivesV5AbridgedHrmpChannel]>>;
        readonly egressChannels: Vec<ITuple<[u32, PolkadotPrimitivesV5AbridgedHrmpChannel]>>;
    }
    /** @name CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity (299) */
    interface CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity extends Struct {
        readonly remainingCount: u32;
        readonly remainingSize: u32;
    }
    /** @name PolkadotPrimitivesV5AbridgedHrmpChannel (302) */
    interface PolkadotPrimitivesV5AbridgedHrmpChannel extends Struct {
        readonly maxCapacity: u32;
        readonly maxTotalSize: u32;
        readonly maxMessageSize: u32;
        readonly msgCount: u32;
        readonly totalSize: u32;
        readonly mqcHead: Option<H256>;
    }
    /** @name PolkadotPrimitivesV5AbridgedHostConfiguration (303) */
    interface PolkadotPrimitivesV5AbridgedHostConfiguration extends Struct {
        readonly maxCodeSize: u32;
        readonly maxHeadDataSize: u32;
        readonly maxUpwardQueueCount: u32;
        readonly maxUpwardQueueSize: u32;
        readonly maxUpwardMessageSize: u32;
        readonly maxUpwardMessageNumPerCandidate: u32;
        readonly hrmpMaxMessageNumPerCandidate: u32;
        readonly validationUpgradeCooldown: u32;
        readonly validationUpgradeDelay: u32;
        readonly asyncBackingParams: PolkadotPrimitivesVstagingAsyncBackingParams;
    }
    /** @name PolkadotPrimitivesVstagingAsyncBackingParams (304) */
    interface PolkadotPrimitivesVstagingAsyncBackingParams extends Struct {
        readonly maxCandidateDepth: u32;
        readonly allowedAncestryLen: u32;
    }
    /** @name PolkadotCorePrimitivesOutboundHrmpMessage (310) */
    interface PolkadotCorePrimitivesOutboundHrmpMessage extends Struct {
        readonly recipient: u32;
        readonly data: Bytes;
    }
    /** @name CumulusPalletParachainSystemCodeUpgradeAuthorization (311) */
    interface CumulusPalletParachainSystemCodeUpgradeAuthorization extends Struct {
        readonly codeHash: H256;
        readonly checkVersion: bool;
    }
    /** @name CumulusPalletParachainSystemError (312) */
    interface CumulusPalletParachainSystemError extends Enum {
        readonly isOverlappingUpgrades: boolean;
        readonly isProhibitedByPolkadot: boolean;
        readonly isTooBig: boolean;
        readonly isValidationDataNotAvailable: boolean;
        readonly isHostConfigurationNotAvailable: boolean;
        readonly isNotScheduled: boolean;
        readonly isNothingAuthorized: boolean;
        readonly isUnauthorized: boolean;
        readonly type: 'OverlappingUpgrades' | 'ProhibitedByPolkadot' | 'TooBig' | 'ValidationDataNotAvailable' | 'HostConfigurationNotAvailable' | 'NotScheduled' | 'NothingAuthorized' | 'Unauthorized';
    }
    /** @name PalletBalancesBalanceLock (314) */
    interface PalletBalancesBalanceLock extends Struct {
        readonly id: U8aFixed;
        readonly amount: u128;
        readonly reasons: PalletBalancesReasons;
    }
    /** @name PalletBalancesReasons (315) */
    interface PalletBalancesReasons extends Enum {
        readonly isFee: boolean;
        readonly isMisc: boolean;
        readonly isAll: boolean;
        readonly type: 'Fee' | 'Misc' | 'All';
    }
    /** @name PalletBalancesReserveData (318) */
    interface PalletBalancesReserveData extends Struct {
        readonly id: U8aFixed;
        readonly amount: u128;
    }
    /** @name PalletBalancesIdAmountRuntimeHoldReason (321) */
    interface PalletBalancesIdAmountRuntimeHoldReason extends Struct {
        readonly id: AutographParachainRuntimeRuntimeHoldReason;
        readonly amount: u128;
    }
    /** @name AutographParachainRuntimeRuntimeHoldReason (322) */
    type AutographParachainRuntimeRuntimeHoldReason = Null;
    /** @name PalletBalancesIdAmountRuntimeFreezeReason (325) */
    interface PalletBalancesIdAmountRuntimeFreezeReason extends Struct {
        readonly id: AutographParachainRuntimeRuntimeFreezeReason;
        readonly amount: u128;
    }
    /** @name AutographParachainRuntimeRuntimeFreezeReason (326) */
    type AutographParachainRuntimeRuntimeFreezeReason = Null;
    /** @name PalletBalancesError (328) */
    interface PalletBalancesError extends Enum {
        readonly isVestingBalance: boolean;
        readonly isLiquidityRestrictions: boolean;
        readonly isInsufficientBalance: boolean;
        readonly isExistentialDeposit: boolean;
        readonly isExpendability: boolean;
        readonly isExistingVestingSchedule: boolean;
        readonly isDeadAccount: boolean;
        readonly isTooManyReserves: boolean;
        readonly isTooManyHolds: boolean;
        readonly isTooManyFreezes: boolean;
        readonly type: 'VestingBalance' | 'LiquidityRestrictions' | 'InsufficientBalance' | 'ExistentialDeposit' | 'Expendability' | 'ExistingVestingSchedule' | 'DeadAccount' | 'TooManyReserves' | 'TooManyHolds' | 'TooManyFreezes';
    }
    /** @name PalletBountiesBounty (329) */
    interface PalletBountiesBounty extends Struct {
        readonly proposer: AccountId32;
        readonly value: u128;
        readonly fee: u128;
        readonly curatorDeposit: u128;
        readonly bond: u128;
        readonly status: PalletBountiesBountyStatus;
    }
    /** @name PalletBountiesBountyStatus (330) */
    interface PalletBountiesBountyStatus extends Enum {
        readonly isProposed: boolean;
        readonly isApproved: boolean;
        readonly isFunded: boolean;
        readonly isCuratorProposed: boolean;
        readonly asCuratorProposed: {
            readonly curator: AccountId32;
        } & Struct;
        readonly isActive: boolean;
        readonly asActive: {
            readonly curator: AccountId32;
            readonly updateDue: u64;
        } & Struct;
        readonly isPendingPayout: boolean;
        readonly asPendingPayout: {
            readonly curator: AccountId32;
            readonly beneficiary: AccountId32;
            readonly unlockAt: u64;
        } & Struct;
        readonly type: 'Proposed' | 'Approved' | 'Funded' | 'CuratorProposed' | 'Active' | 'PendingPayout';
    }
    /** @name PalletBountiesError (335) */
    interface PalletBountiesError extends Enum {
        readonly isInsufficientProposersBalance: boolean;
        readonly isInvalidIndex: boolean;
        readonly isReasonTooBig: boolean;
        readonly isUnexpectedStatus: boolean;
        readonly isRequireCurator: boolean;
        readonly isInvalidValue: boolean;
        readonly isInvalidFee: boolean;
        readonly isPendingPayout: boolean;
        readonly isPremature: boolean;
        readonly isHasActiveChildBounty: boolean;
        readonly isTooManyQueued: boolean;
        readonly type: 'InsufficientProposersBalance' | 'InvalidIndex' | 'ReasonTooBig' | 'UnexpectedStatus' | 'RequireCurator' | 'InvalidValue' | 'InvalidFee' | 'PendingPayout' | 'Premature' | 'HasActiveChildBounty' | 'TooManyQueued';
    }
    /** @name PalletTransactionPaymentReleases (337) */
    interface PalletTransactionPaymentReleases extends Enum {
        readonly isV1Ancient: boolean;
        readonly isV2: boolean;
        readonly type: 'V1Ancient' | 'V2';
    }
    /** @name PalletTreasuryProposal (338) */
    interface PalletTreasuryProposal extends Struct {
        readonly proposer: AccountId32;
        readonly value: u128;
        readonly beneficiary: AccountId32;
        readonly bond: u128;
    }
    /** @name FrameSupportPalletId (339) */
    interface FrameSupportPalletId extends U8aFixed {
    }
    /** @name PalletTreasuryError (340) */
    interface PalletTreasuryError extends Enum {
        readonly isInsufficientProposersBalance: boolean;
        readonly isInvalidIndex: boolean;
        readonly isTooManyApprovals: boolean;
        readonly isInsufficientPermission: boolean;
        readonly isProposalNotApproved: boolean;
        readonly type: 'InsufficientProposersBalance' | 'InvalidIndex' | 'TooManyApprovals' | 'InsufficientPermission' | 'ProposalNotApproved';
    }
    /** @name SpCoreCryptoKeyTypeId (347) */
    interface SpCoreCryptoKeyTypeId extends U8aFixed {
    }
    /** @name PalletSessionError (348) */
    interface PalletSessionError extends Enum {
        readonly isInvalidProof: boolean;
        readonly isNoAssociatedValidatorId: boolean;
        readonly isDuplicatedKey: boolean;
        readonly isNoKeys: boolean;
        readonly isNoAccount: boolean;
        readonly type: 'InvalidProof' | 'NoAssociatedValidatorId' | 'DuplicatedKey' | 'NoKeys' | 'NoAccount';
    }
    /** @name ParachainStakingRoundInfo (349) */
    interface ParachainStakingRoundInfo extends Struct {
        readonly current: u32;
        readonly first: u64;
        readonly length: u64;
    }
    /** @name ParachainStakingDelegationCounter (350) */
    interface ParachainStakingDelegationCounter extends Struct {
        readonly round: u32;
        readonly counter: u32;
    }
    /** @name ParachainStakingStake (351) */
    interface ParachainStakingStake extends Struct {
        readonly owner: AccountId32;
        readonly amount: u128;
    }
    /** @name ParachainStakingCandidate (352) */
    interface ParachainStakingCandidate extends Struct {
        readonly id: AccountId32;
        readonly stake: u128;
        readonly delegators: ParachainStakingSetOrderedSet;
        readonly total: u128;
        readonly status: ParachainStakingCandidateStatus;
    }
    /** @name ParachainStakingSetOrderedSet (353) */
    interface ParachainStakingSetOrderedSet extends Vec<ParachainStakingStake> {
    }
    /** @name ParachainStakingCandidateStatus (356) */
    interface ParachainStakingCandidateStatus extends Enum {
        readonly isActive: boolean;
        readonly isLeaving: boolean;
        readonly asLeaving: u32;
        readonly type: 'Active' | 'Leaving';
    }
    /** @name ParachainStakingTotalStake (357) */
    interface ParachainStakingTotalStake extends Struct {
        readonly collators: u128;
        readonly delegators: u128;
    }
    /** @name ParachainStakingInflationInflationInfo (360) */
    interface ParachainStakingInflationInflationInfo extends Struct {
        readonly collator: ParachainStakingInflationStakingInfo;
        readonly delegator: ParachainStakingInflationStakingInfo;
    }
    /** @name ParachainStakingInflationStakingInfo (361) */
    interface ParachainStakingInflationStakingInfo extends Struct {
        readonly maxRate: Perquintill;
        readonly rewardRate: ParachainStakingInflationRewardRate;
    }
    /** @name ParachainStakingInflationRewardRate (362) */
    interface ParachainStakingInflationRewardRate extends Struct {
        readonly annual: Perquintill;
        readonly perBlock: Perquintill;
    }
    /** @name ParachainStakingError (367) */
    interface ParachainStakingError extends Enum {
        readonly isDelegatorNotFound: boolean;
        readonly isCandidateNotFound: boolean;
        readonly isDelegatorExists: boolean;
        readonly isCandidateExists: boolean;
        readonly isValStakeZero: boolean;
        readonly isValStakeBelowMin: boolean;
        readonly isValStakeAboveMax: boolean;
        readonly isDelegationBelowMin: boolean;
        readonly isAlreadyLeaving: boolean;
        readonly isNotLeaving: boolean;
        readonly isCannotLeaveYet: boolean;
        readonly isCannotJoinBeforeUnlocking: boolean;
        readonly isAlreadyDelegating: boolean;
        readonly isNotYetDelegating: boolean;
        readonly isDelegationsPerRoundExceeded: boolean;
        readonly isTooManyDelegators: boolean;
        readonly isTooFewCollatorCandidates: boolean;
        readonly isCannotStakeIfLeaving: boolean;
        readonly isCannotDelegateIfLeaving: boolean;
        readonly isMaxCollatorsPerDelegatorExceeded: boolean;
        readonly isAlreadyDelegatedCollator: boolean;
        readonly isDelegationNotFound: boolean;
        readonly isUnderflow: boolean;
        readonly isCannotSetAboveMax: boolean;
        readonly isCannotSetBelowMin: boolean;
        readonly isInvalidSchedule: boolean;
        readonly isNoMoreUnstaking: boolean;
        readonly isTooEarly: boolean;
        readonly isStakeNotFound: boolean;
        readonly isUnstakingIsEmpty: boolean;
        readonly isRewardsNotFound: boolean;
        readonly type: 'DelegatorNotFound' | 'CandidateNotFound' | 'DelegatorExists' | 'CandidateExists' | 'ValStakeZero' | 'ValStakeBelowMin' | 'ValStakeAboveMax' | 'DelegationBelowMin' | 'AlreadyLeaving' | 'NotLeaving' | 'CannotLeaveYet' | 'CannotJoinBeforeUnlocking' | 'AlreadyDelegating' | 'NotYetDelegating' | 'DelegationsPerRoundExceeded' | 'TooManyDelegators' | 'TooFewCollatorCandidates' | 'CannotStakeIfLeaving' | 'CannotDelegateIfLeaving' | 'MaxCollatorsPerDelegatorExceeded' | 'AlreadyDelegatedCollator' | 'DelegationNotFound' | 'Underflow' | 'CannotSetAboveMax' | 'CannotSetBelowMin' | 'InvalidSchedule' | 'NoMoreUnstaking' | 'TooEarly' | 'StakeNotFound' | 'UnstakingIsEmpty' | 'RewardsNotFound';
    }
    /** @name PalletConvictionVotingVoteVoting (370) */
    interface PalletConvictionVotingVoteVoting extends Enum {
        readonly isCasting: boolean;
        readonly asCasting: PalletConvictionVotingVoteCasting;
        readonly isDelegating: boolean;
        readonly asDelegating: PalletConvictionVotingVoteDelegating;
        readonly type: 'Casting' | 'Delegating';
    }
    /** @name PalletConvictionVotingVoteCasting (371) */
    interface PalletConvictionVotingVoteCasting extends Struct {
        readonly votes: Vec<ITuple<[u32, PalletConvictionVotingVoteAccountVote]>>;
        readonly delegations: PalletConvictionVotingDelegations;
        readonly prior: PalletConvictionVotingVotePriorLock;
    }
    /** @name PalletConvictionVotingDelegations (375) */
    interface PalletConvictionVotingDelegations extends Struct {
        readonly votes: u128;
        readonly capital: u128;
    }
    /** @name PalletConvictionVotingVotePriorLock (376) */
    interface PalletConvictionVotingVotePriorLock extends ITuple<[u64, u128]> {
    }
    /** @name PalletConvictionVotingVoteDelegating (377) */
    interface PalletConvictionVotingVoteDelegating extends Struct {
        readonly balance: u128;
        readonly target: AccountId32;
        readonly conviction: PalletConvictionVotingConviction;
        readonly delegations: PalletConvictionVotingDelegations;
        readonly prior: PalletConvictionVotingVotePriorLock;
    }
    /** @name PalletConvictionVotingError (381) */
    interface PalletConvictionVotingError extends Enum {
        readonly isNotOngoing: boolean;
        readonly isNotVoter: boolean;
        readonly isNoPermission: boolean;
        readonly isNoPermissionYet: boolean;
        readonly isAlreadyDelegating: boolean;
        readonly isAlreadyVoting: boolean;
        readonly isInsufficientFunds: boolean;
        readonly isNotDelegating: boolean;
        readonly isNonsense: boolean;
        readonly isMaxVotesReached: boolean;
        readonly isClassNeeded: boolean;
        readonly isBadClass: boolean;
        readonly type: 'NotOngoing' | 'NotVoter' | 'NoPermission' | 'NoPermissionYet' | 'AlreadyDelegating' | 'AlreadyVoting' | 'InsufficientFunds' | 'NotDelegating' | 'Nonsense' | 'MaxVotesReached' | 'ClassNeeded' | 'BadClass';
    }
    /** @name PalletRankedCollectiveMemberRecord (382) */
    interface PalletRankedCollectiveMemberRecord extends Struct {
        readonly rank: u16;
    }
    /** @name PalletRankedCollectiveError (387) */
    interface PalletRankedCollectiveError extends Enum {
        readonly isAlreadyMember: boolean;
        readonly isNotMember: boolean;
        readonly isNotPolling: boolean;
        readonly isOngoing: boolean;
        readonly isNoneRemaining: boolean;
        readonly isCorruption: boolean;
        readonly isRankTooLow: boolean;
        readonly isInvalidWitness: boolean;
        readonly isNoPermission: boolean;
        readonly type: 'AlreadyMember' | 'NotMember' | 'NotPolling' | 'Ongoing' | 'NoneRemaining' | 'Corruption' | 'RankTooLow' | 'InvalidWitness' | 'NoPermission';
    }
    /** @name PalletReferendaReferendumInfoRankedCollectiveTally (388) */
    interface PalletReferendaReferendumInfoRankedCollectiveTally extends Enum {
        readonly isOngoing: boolean;
        readonly asOngoing: PalletReferendaReferendumStatusRankedCollectiveTally;
        readonly isApproved: boolean;
        readonly asApproved: ITuple<[u64, Option<PalletReferendaDeposit>, Option<PalletReferendaDeposit>]>;
        readonly isRejected: boolean;
        readonly asRejected: ITuple<[u64, Option<PalletReferendaDeposit>, Option<PalletReferendaDeposit>]>;
        readonly isCancelled: boolean;
        readonly asCancelled: ITuple<[u64, Option<PalletReferendaDeposit>, Option<PalletReferendaDeposit>]>;
        readonly isTimedOut: boolean;
        readonly asTimedOut: ITuple<[u64, Option<PalletReferendaDeposit>, Option<PalletReferendaDeposit>]>;
        readonly isKilled: boolean;
        readonly asKilled: u64;
        readonly type: 'Ongoing' | 'Approved' | 'Rejected' | 'Cancelled' | 'TimedOut' | 'Killed';
    }
    /** @name PalletReferendaReferendumStatusRankedCollectiveTally (389) */
    interface PalletReferendaReferendumStatusRankedCollectiveTally extends Struct {
        readonly track: u16;
        readonly origin: AutographParachainRuntimeOriginCaller;
        readonly proposal: FrameSupportPreimagesBounded;
        readonly enactment: FrameSupportScheduleDispatchTime;
        readonly submitted: u64;
        readonly submissionDeposit: PalletReferendaDeposit;
        readonly decisionDeposit: Option<PalletReferendaDeposit>;
        readonly deciding: Option<PalletReferendaDecidingStatus>;
        readonly tally: PalletRankedCollectiveTally;
        readonly inQueue: bool;
        readonly alarm: Option<ITuple<[u64, ITuple<[u64, u32]>]>>;
    }
    /** @name PalletReferendaDeposit (390) */
    interface PalletReferendaDeposit extends Struct {
        readonly who: AccountId32;
        readonly amount: u128;
    }
    /** @name PalletReferendaDecidingStatus (393) */
    interface PalletReferendaDecidingStatus extends Struct {
        readonly since: u64;
        readonly confirming: Option<u64>;
    }
    /** @name PalletReferendaTrackInfo (402) */
    interface PalletReferendaTrackInfo extends Struct {
        readonly name: Text;
        readonly maxDeciding: u32;
        readonly decisionDeposit: u128;
        readonly preparePeriod: u64;
        readonly decisionPeriod: u64;
        readonly confirmPeriod: u64;
        readonly minEnactmentPeriod: u64;
        readonly minApproval: PalletReferendaCurve;
        readonly minSupport: PalletReferendaCurve;
    }
    /** @name PalletReferendaCurve (403) */
    interface PalletReferendaCurve extends Enum {
        readonly isLinearDecreasing: boolean;
        readonly asLinearDecreasing: {
            readonly length: Perbill;
            readonly floor: Perbill;
            readonly ceil: Perbill;
        } & Struct;
        readonly isSteppedDecreasing: boolean;
        readonly asSteppedDecreasing: {
            readonly begin: Perbill;
            readonly end: Perbill;
            readonly step: Perbill;
            readonly period: Perbill;
        } & Struct;
        readonly isReciprocal: boolean;
        readonly asReciprocal: {
            readonly factor: i64;
            readonly xOffset: i64;
            readonly yOffset: i64;
        } & Struct;
        readonly type: 'LinearDecreasing' | 'SteppedDecreasing' | 'Reciprocal';
    }
    /** @name PalletReferendaError (407) */
    interface PalletReferendaError extends Enum {
        readonly isNotOngoing: boolean;
        readonly isHasDeposit: boolean;
        readonly isBadTrack: boolean;
        readonly isFull: boolean;
        readonly isQueueEmpty: boolean;
        readonly isBadReferendum: boolean;
        readonly isNothingToDo: boolean;
        readonly isNoTrack: boolean;
        readonly isUnfinished: boolean;
        readonly isNoPermission: boolean;
        readonly isNoDeposit: boolean;
        readonly isBadStatus: boolean;
        readonly isPreimageNotExist: boolean;
        readonly type: 'NotOngoing' | 'HasDeposit' | 'BadTrack' | 'Full' | 'QueueEmpty' | 'BadReferendum' | 'NothingToDo' | 'NoTrack' | 'Unfinished' | 'NoPermission' | 'NoDeposit' | 'BadStatus' | 'PreimageNotExist';
    }
    /** @name PalletReferendaReferendumInfoConvictionVotingTally (408) */
    interface PalletReferendaReferendumInfoConvictionVotingTally extends Enum {
        readonly isOngoing: boolean;
        readonly asOngoing: PalletReferendaReferendumStatusConvictionVotingTally;
        readonly isApproved: boolean;
        readonly asApproved: ITuple<[u64, Option<PalletReferendaDeposit>, Option<PalletReferendaDeposit>]>;
        readonly isRejected: boolean;
        readonly asRejected: ITuple<[u64, Option<PalletReferendaDeposit>, Option<PalletReferendaDeposit>]>;
        readonly isCancelled: boolean;
        readonly asCancelled: ITuple<[u64, Option<PalletReferendaDeposit>, Option<PalletReferendaDeposit>]>;
        readonly isTimedOut: boolean;
        readonly asTimedOut: ITuple<[u64, Option<PalletReferendaDeposit>, Option<PalletReferendaDeposit>]>;
        readonly isKilled: boolean;
        readonly asKilled: u64;
        readonly type: 'Ongoing' | 'Approved' | 'Rejected' | 'Cancelled' | 'TimedOut' | 'Killed';
    }
    /** @name PalletReferendaReferendumStatusConvictionVotingTally (409) */
    interface PalletReferendaReferendumStatusConvictionVotingTally extends Struct {
        readonly track: u16;
        readonly origin: AutographParachainRuntimeOriginCaller;
        readonly proposal: FrameSupportPreimagesBounded;
        readonly enactment: FrameSupportScheduleDispatchTime;
        readonly submitted: u64;
        readonly submissionDeposit: PalletReferendaDeposit;
        readonly decisionDeposit: Option<PalletReferendaDeposit>;
        readonly deciding: Option<PalletReferendaDecidingStatus>;
        readonly tally: PalletConvictionVotingTally;
        readonly inQueue: bool;
        readonly alarm: Option<ITuple<[u64, ITuple<[u64, u32]>]>>;
    }
    /** @name PalletWhitelistError (414) */
    interface PalletWhitelistError extends Enum {
        readonly isUnavailablePreImage: boolean;
        readonly isUndecodableCall: boolean;
        readonly isInvalidCallWeightWitness: boolean;
        readonly isCallIsNotWhitelisted: boolean;
        readonly isCallAlreadyWhitelisted: boolean;
        readonly type: 'UnavailablePreImage' | 'UndecodableCall' | 'InvalidCallWeightWitness' | 'CallIsNotWhitelisted' | 'CallAlreadyWhitelisted';
    }
    /** @name PalletMultisigMultisig (416) */
    interface PalletMultisigMultisig extends Struct {
        readonly when: PalletMultisigTimepoint;
        readonly deposit: u128;
        readonly depositor: AccountId32;
        readonly approvals: Vec<AccountId32>;
    }
    /** @name PalletMultisigError (418) */
    interface PalletMultisigError extends Enum {
        readonly isMinimumThreshold: boolean;
        readonly isAlreadyApproved: boolean;
        readonly isNoApprovalsNeeded: boolean;
        readonly isTooFewSignatories: boolean;
        readonly isTooManySignatories: boolean;
        readonly isSignatoriesOutOfOrder: boolean;
        readonly isSenderInSignatories: boolean;
        readonly isNotFound: boolean;
        readonly isNotOwner: boolean;
        readonly isNoTimepoint: boolean;
        readonly isWrongTimepoint: boolean;
        readonly isUnexpectedTimepoint: boolean;
        readonly isMaxWeightTooLow: boolean;
        readonly isAlreadyStored: boolean;
        readonly type: 'MinimumThreshold' | 'AlreadyApproved' | 'NoApprovalsNeeded' | 'TooFewSignatories' | 'TooManySignatories' | 'SignatoriesOutOfOrder' | 'SenderInSignatories' | 'NotFound' | 'NotOwner' | 'NoTimepoint' | 'WrongTimepoint' | 'UnexpectedTimepoint' | 'MaxWeightTooLow' | 'AlreadyStored';
    }
    /** @name PalletSudoError (419) */
    interface PalletSudoError extends Enum {
        readonly isRequireSudo: boolean;
        readonly type: 'RequireSudo';
    }
    /** @name PalletTxPauseError (420) */
    interface PalletTxPauseError extends Enum {
        readonly isIsPaused: boolean;
        readonly isIsUnpaused: boolean;
        readonly isUnpausable: boolean;
        readonly isNotFound: boolean;
        readonly type: 'IsPaused' | 'IsUnpaused' | 'Unpausable' | 'NotFound';
    }
    /** @name PalletSchedulerScheduled (423) */
    interface PalletSchedulerScheduled extends Struct {
        readonly maybeId: Option<U8aFixed>;
        readonly priority: u8;
        readonly call: FrameSupportPreimagesBounded;
        readonly maybePeriodic: Option<ITuple<[u64, u32]>>;
        readonly origin: AutographParachainRuntimeOriginCaller;
    }
    /** @name PalletSchedulerError (425) */
    interface PalletSchedulerError extends Enum {
        readonly isFailedToSchedule: boolean;
        readonly isNotFound: boolean;
        readonly isTargetBlockNumberInPast: boolean;
        readonly isRescheduleNoChange: boolean;
        readonly isNamed: boolean;
        readonly type: 'FailedToSchedule' | 'NotFound' | 'TargetBlockNumberInPast' | 'RescheduleNoChange' | 'Named';
    }
    /** @name PalletPreimageRequestStatus (426) */
    interface PalletPreimageRequestStatus extends Enum {
        readonly isUnrequested: boolean;
        readonly asUnrequested: {
            readonly deposit: ITuple<[AccountId32, u128]>;
            readonly len: u32;
        } & Struct;
        readonly isRequested: boolean;
        readonly asRequested: {
            readonly deposit: Option<ITuple<[AccountId32, u128]>>;
            readonly count: u32;
            readonly len: Option<u32>;
        } & Struct;
        readonly type: 'Unrequested' | 'Requested';
    }
    /** @name PalletPreimageError (430) */
    interface PalletPreimageError extends Enum {
        readonly isTooBig: boolean;
        readonly isAlreadyNoted: boolean;
        readonly isNotAuthorized: boolean;
        readonly isNotNoted: boolean;
        readonly isRequested: boolean;
        readonly isNotRequested: boolean;
        readonly type: 'TooBig' | 'AlreadyNoted' | 'NotAuthorized' | 'NotNoted' | 'Requested' | 'NotRequested';
    }
    /** @name PalletWhitelistInvestor (431) */
    interface PalletWhitelistInvestor extends Struct {
        readonly account: AccountId32;
        readonly isActive: bool;
    }
    /** @name PalletAccessError (435) */
    interface PalletAccessError extends Enum {
        readonly isMaxRoles: boolean;
        readonly isNoPermission: boolean;
        readonly isRoleAlreadyGranted: boolean;
        readonly isRoleNotGranted: boolean;
        readonly type: 'MaxRoles' | 'NoPermission' | 'RoleAlreadyGranted' | 'RoleNotGranted';
    }
    /** @name CollectionPrimitivesCollection (436) */
    interface CollectionPrimitivesCollection extends Struct {
        readonly owner: AccountId32;
        readonly mode: CollectionPrimitivesCollectionMode;
        readonly name: Vec<u16>;
        readonly description: Vec<u16>;
        readonly tokenPrefix: Bytes;
        readonly limits: CollectionPrimitivesCollectionLimits;
    }
    /** @name CollectionPrimitivesCollectionMode (437) */
    interface CollectionPrimitivesCollectionMode extends Enum {
        readonly isReFungible: boolean;
        readonly type: 'ReFungible';
    }
    /** @name CollectionPrimitivesProperties (438) */
    interface CollectionPrimitivesProperties extends Struct {
        readonly map: CollectionPrimitivesPropertiesPropertiesMapBoundedVec;
        readonly consumedSpace: u32;
        readonly spaceLimit: u32;
    }
    /** @name CollectionPrimitivesPropertiesPropertiesMapBoundedVec (439) */
    interface CollectionPrimitivesPropertiesPropertiesMapBoundedVec extends BTreeMap<Bytes, Bytes> {
    }
    /** @name CollectionPrimitivesPropertiesPropertiesMapPropertyPermission (444) */
    interface CollectionPrimitivesPropertiesPropertiesMapPropertyPermission extends BTreeMap<Bytes, CollectionPrimitivesPropertiesPropertyPermission> {
    }
    /** @name PalletCommonError (449) */
    interface PalletCommonError extends Enum {
        readonly isCollectionNotFound: boolean;
        readonly isNoPermission: boolean;
        readonly isCantDestroyNotEmptyCollection: boolean;
        readonly isCollectionNameLimitExceeded: boolean;
        readonly isCollectionDescriptionLimitExceeded: boolean;
        readonly isCollectionTokenPrefixLimitExceeded: boolean;
        readonly isCollectionPropertiesLimitExceeded: boolean;
        readonly isTotalCollectionsLimitExceeded: boolean;
        readonly isOwnerPermissionsCantBeReverted: boolean;
        readonly isTransfersDisabled: boolean;
        readonly isAccountTokenLimitExceeded: boolean;
        readonly isCollectionTokenLimitExceeded: boolean;
        readonly isTokenNotFound: boolean;
        readonly isTokenValueTooLow: boolean;
        readonly isApprovedValueTooLow: boolean;
        readonly isCantApproveMoreThanOwned: boolean;
        readonly isNotSufficientFounds: boolean;
        readonly isImmutableProperty: boolean;
        readonly isNoSpaceForProperty: boolean;
        readonly isPropertyLimitReached: boolean;
        readonly isPropertyKeyIsTooLong: boolean;
        readonly isInvalidCharacterInPropertyKey: boolean;
        readonly isEmptyPropertyKey: boolean;
        readonly type: 'CollectionNotFound' | 'NoPermission' | 'CantDestroyNotEmptyCollection' | 'CollectionNameLimitExceeded' | 'CollectionDescriptionLimitExceeded' | 'CollectionTokenPrefixLimitExceeded' | 'CollectionPropertiesLimitExceeded' | 'TotalCollectionsLimitExceeded' | 'OwnerPermissionsCantBeReverted' | 'TransfersDisabled' | 'AccountTokenLimitExceeded' | 'CollectionTokenLimitExceeded' | 'TokenNotFound' | 'TokenValueTooLow' | 'ApprovedValueTooLow' | 'CantApproveMoreThanOwned' | 'NotSufficientFounds' | 'ImmutableProperty' | 'NoSpaceForProperty' | 'PropertyLimitReached' | 'PropertyKeyIsTooLong' | 'InvalidCharacterInPropertyKey' | 'EmptyPropertyKey';
    }
    /** @name PalletRefungibleError (455) */
    interface PalletRefungibleError extends Enum {
        readonly isInvalidInput: boolean;
        readonly isNotCompleteItemsData: boolean;
        readonly isUserDuplicatesGiven: boolean;
        readonly isNeitherWhitelistedNorCollectionOwner: boolean;
        readonly isZeroTokenPieces: boolean;
        readonly isMaxRefungibilePiecesExceeded: boolean;
        readonly isRepartitionWhileNotOwningAllPieces: boolean;
        readonly isRefungibleDisallowsNesting: boolean;
        readonly isSettingPropertiesNotAllowed: boolean;
        readonly isTooManyTokensPerCall: boolean;
        readonly isMaxInitialHoldersExceeded: boolean;
        readonly isMaxPropertiesPerTokenExceeded: boolean;
        readonly type: 'InvalidInput' | 'NotCompleteItemsData' | 'UserDuplicatesGiven' | 'NeitherWhitelistedNorCollectionOwner' | 'ZeroTokenPieces' | 'MaxRefungibilePiecesExceeded' | 'RepartitionWhileNotOwningAllPieces' | 'RefungibleDisallowsNesting' | 'SettingPropertiesNotAllowed' | 'TooManyTokensPerCall' | 'MaxInitialHoldersExceeded' | 'MaxPropertiesPerTokenExceeded';
    }
    /** @name CumulusPalletXcmpQueueInboundChannelDetails (457) */
    interface CumulusPalletXcmpQueueInboundChannelDetails extends Struct {
        readonly sender: u32;
        readonly state: CumulusPalletXcmpQueueInboundState;
        readonly messageMetadata: Vec<ITuple<[u32, PolkadotParachainPrimitivesPrimitivesXcmpMessageFormat]>>;
    }
    /** @name CumulusPalletXcmpQueueInboundState (458) */
    interface CumulusPalletXcmpQueueInboundState extends Enum {
        readonly isOk: boolean;
        readonly isSuspended: boolean;
        readonly type: 'Ok' | 'Suspended';
    }
    /** @name PolkadotParachainPrimitivesPrimitivesXcmpMessageFormat (461) */
    interface PolkadotParachainPrimitivesPrimitivesXcmpMessageFormat extends Enum {
        readonly isConcatenatedVersionedXcm: boolean;
        readonly isConcatenatedEncodedBlob: boolean;
        readonly isSignals: boolean;
        readonly type: 'ConcatenatedVersionedXcm' | 'ConcatenatedEncodedBlob' | 'Signals';
    }
    /** @name CumulusPalletXcmpQueueOutboundChannelDetails (464) */
    interface CumulusPalletXcmpQueueOutboundChannelDetails extends Struct {
        readonly recipient: u32;
        readonly state: CumulusPalletXcmpQueueOutboundState;
        readonly signalsExist: bool;
        readonly firstIndex: u16;
        readonly lastIndex: u16;
    }
    /** @name CumulusPalletXcmpQueueOutboundState (465) */
    interface CumulusPalletXcmpQueueOutboundState extends Enum {
        readonly isOk: boolean;
        readonly isSuspended: boolean;
        readonly type: 'Ok' | 'Suspended';
    }
    /** @name CumulusPalletXcmpQueueQueueConfigData (467) */
    interface CumulusPalletXcmpQueueQueueConfigData extends Struct {
        readonly suspendThreshold: u32;
        readonly dropThreshold: u32;
        readonly resumeThreshold: u32;
        readonly thresholdWeight: SpWeightsWeightV2Weight;
        readonly weightRestrictDecay: SpWeightsWeightV2Weight;
        readonly xcmpMaxIndividualWeight: SpWeightsWeightV2Weight;
    }
    /** @name CumulusPalletXcmpQueueError (469) */
    interface CumulusPalletXcmpQueueError extends Enum {
        readonly isFailedToSend: boolean;
        readonly isBadXcmOrigin: boolean;
        readonly isBadXcm: boolean;
        readonly isBadOverweightIndex: boolean;
        readonly isWeightOverLimit: boolean;
        readonly type: 'FailedToSend' | 'BadXcmOrigin' | 'BadXcm' | 'BadOverweightIndex' | 'WeightOverLimit';
    }
    /** @name CumulusPalletXcmError (470) */
    type CumulusPalletXcmError = Null;
    /** @name CumulusPalletDmpQueueConfigData (471) */
    interface CumulusPalletDmpQueueConfigData extends Struct {
        readonly maxIndividual: SpWeightsWeightV2Weight;
    }
    /** @name CumulusPalletDmpQueuePageIndexData (472) */
    interface CumulusPalletDmpQueuePageIndexData extends Struct {
        readonly beginUsed: u32;
        readonly endUsed: u32;
        readonly overweightCount: u64;
    }
    /** @name CumulusPalletDmpQueueError (475) */
    interface CumulusPalletDmpQueueError extends Enum {
        readonly isUnknown: boolean;
        readonly isOverLimit: boolean;
        readonly type: 'Unknown' | 'OverLimit';
    }
    /** @name PalletXcmQueryStatus (476) */
    interface PalletXcmQueryStatus extends Enum {
        readonly isPending: boolean;
        readonly asPending: {
            readonly responder: StagingXcmVersionedMultiLocation;
            readonly maybeMatchQuerier: Option<StagingXcmVersionedMultiLocation>;
            readonly maybeNotify: Option<ITuple<[u8, u8]>>;
            readonly timeout: u64;
        } & Struct;
        readonly isVersionNotifier: boolean;
        readonly asVersionNotifier: {
            readonly origin: StagingXcmVersionedMultiLocation;
            readonly isActive: bool;
        } & Struct;
        readonly isReady: boolean;
        readonly asReady: {
            readonly response: StagingXcmVersionedResponse;
            readonly at: u64;
        } & Struct;
        readonly type: 'Pending' | 'VersionNotifier' | 'Ready';
    }
    /** @name StagingXcmVersionedResponse (480) */
    interface StagingXcmVersionedResponse extends Enum {
        readonly isV2: boolean;
        readonly asV2: StagingXcmV2Response;
        readonly isV3: boolean;
        readonly asV3: StagingXcmV3Response;
        readonly type: 'V2' | 'V3';
    }
    /** @name PalletXcmVersionMigrationStage (486) */
    interface PalletXcmVersionMigrationStage extends Enum {
        readonly isMigrateSupportedVersion: boolean;
        readonly isMigrateVersionNotifiers: boolean;
        readonly isNotifyCurrentTargets: boolean;
        readonly asNotifyCurrentTargets: Option<Bytes>;
        readonly isMigrateAndNotifyOldTargets: boolean;
        readonly type: 'MigrateSupportedVersion' | 'MigrateVersionNotifiers' | 'NotifyCurrentTargets' | 'MigrateAndNotifyOldTargets';
    }
    /** @name StagingXcmVersionedAssetId (489) */
    interface StagingXcmVersionedAssetId extends Enum {
        readonly isV3: boolean;
        readonly asV3: StagingXcmV3MultiassetAssetId;
        readonly type: 'V3';
    }
    /** @name PalletXcmRemoteLockedFungibleRecord (490) */
    interface PalletXcmRemoteLockedFungibleRecord extends Struct {
        readonly amount: u128;
        readonly owner: StagingXcmVersionedMultiLocation;
        readonly locker: StagingXcmVersionedMultiLocation;
        readonly consumers: Vec<ITuple<[Null, u128]>>;
    }
    /** @name PalletXcmError (497) */
    interface PalletXcmError extends Enum {
        readonly isUnreachable: boolean;
        readonly isSendFailure: boolean;
        readonly isFiltered: boolean;
        readonly isUnweighableMessage: boolean;
        readonly isDestinationNotInvertible: boolean;
        readonly isEmpty: boolean;
        readonly isCannotReanchor: boolean;
        readonly isTooManyAssets: boolean;
        readonly isInvalidOrigin: boolean;
        readonly isBadVersion: boolean;
        readonly isBadLocation: boolean;
        readonly isNoSubscription: boolean;
        readonly isAlreadySubscribed: boolean;
        readonly isInvalidAsset: boolean;
        readonly isLowBalance: boolean;
        readonly isTooManyLocks: boolean;
        readonly isAccountNotSovereign: boolean;
        readonly isFeesNotMet: boolean;
        readonly isLockNotFound: boolean;
        readonly isInUse: boolean;
        readonly type: 'Unreachable' | 'SendFailure' | 'Filtered' | 'UnweighableMessage' | 'DestinationNotInvertible' | 'Empty' | 'CannotReanchor' | 'TooManyAssets' | 'InvalidOrigin' | 'BadVersion' | 'BadLocation' | 'NoSubscription' | 'AlreadySubscribed' | 'InvalidAsset' | 'LowBalance' | 'TooManyLocks' | 'AccountNotSovereign' | 'FeesNotMet' | 'LockNotFound' | 'InUse';
    }
    /** @name FpRpcTransactionStatus (500) */
    interface FpRpcTransactionStatus extends Struct {
        readonly transactionHash: H256;
        readonly transactionIndex: u32;
        readonly from: H160;
        readonly to: Option<H160>;
        readonly contractAddress: Option<H160>;
        readonly logs: Vec<EthereumLog>;
        readonly logsBloom: EthbloomBloom;
    }
    /** @name EthbloomBloom (503) */
    interface EthbloomBloom extends U8aFixed {
    }
    /** @name EthereumReceiptReceiptV3 (505) */
    interface EthereumReceiptReceiptV3 extends Enum {
        readonly isLegacy: boolean;
        readonly asLegacy: EthereumReceiptEip658ReceiptData;
        readonly isEip2930: boolean;
        readonly asEip2930: EthereumReceiptEip658ReceiptData;
        readonly isEip1559: boolean;
        readonly asEip1559: EthereumReceiptEip658ReceiptData;
        readonly type: 'Legacy' | 'Eip2930' | 'Eip1559';
    }
    /** @name EthereumReceiptEip658ReceiptData (506) */
    interface EthereumReceiptEip658ReceiptData extends Struct {
        readonly statusCode: u8;
        readonly usedGas: U256;
        readonly logsBloom: EthbloomBloom;
        readonly logs: Vec<EthereumLog>;
    }
    /** @name EthereumBlock (507) */
    interface EthereumBlock extends Struct {
        readonly header: EthereumHeader;
        readonly transactions: Vec<EthereumTransactionTransactionV2>;
        readonly ommers: Vec<EthereumHeader>;
    }
    /** @name EthereumHeader (508) */
    interface EthereumHeader extends Struct {
        readonly parentHash: H256;
        readonly ommersHash: H256;
        readonly beneficiary: H160;
        readonly stateRoot: H256;
        readonly transactionsRoot: H256;
        readonly receiptsRoot: H256;
        readonly logsBloom: EthbloomBloom;
        readonly difficulty: U256;
        readonly number: U256;
        readonly gasLimit: U256;
        readonly gasUsed: U256;
        readonly timestamp: u64;
        readonly extraData: Bytes;
        readonly mixHash: H256;
        readonly nonce: EthereumTypesHashH64;
    }
    /** @name EthereumTypesHashH64 (509) */
    interface EthereumTypesHashH64 extends U8aFixed {
    }
    /** @name PalletEthereumError (514) */
    interface PalletEthereumError extends Enum {
        readonly isInvalidSignature: boolean;
        readonly isPreLogExists: boolean;
        readonly type: 'InvalidSignature' | 'PreLogExists';
    }
    /** @name PalletEvmCodeMetadata (515) */
    interface PalletEvmCodeMetadata extends Struct {
        readonly size_: u64;
        readonly hash_: H256;
    }
    /** @name PalletEvmError (517) */
    interface PalletEvmError extends Enum {
        readonly isBalanceLow: boolean;
        readonly isFeeOverflow: boolean;
        readonly isPaymentOverflow: boolean;
        readonly isWithdrawFailed: boolean;
        readonly isGasPriceTooLow: boolean;
        readonly isInvalidNonce: boolean;
        readonly isGasLimitTooLow: boolean;
        readonly isGasLimitTooHigh: boolean;
        readonly isUndefined: boolean;
        readonly isReentrancy: boolean;
        readonly isTransactionMustComeFromEOA: boolean;
        readonly type: 'BalanceLow' | 'FeeOverflow' | 'PaymentOverflow' | 'WithdrawFailed' | 'GasPriceTooLow' | 'InvalidNonce' | 'GasLimitTooLow' | 'GasLimitTooHigh' | 'Undefined' | 'Reentrancy' | 'TransactionMustComeFromEOA';
    }
    /** @name SpRuntimeMultiSignature (519) */
    interface SpRuntimeMultiSignature extends Enum {
        readonly isEd25519: boolean;
        readonly asEd25519: SpCoreEd25519Signature;
        readonly isSr25519: boolean;
        readonly asSr25519: SpCoreSr25519Signature;
        readonly isEcdsa: boolean;
        readonly asEcdsa: SpCoreEcdsaSignature;
        readonly type: 'Ed25519' | 'Sr25519' | 'Ecdsa';
    }
    /** @name SpCoreEd25519Signature (520) */
    interface SpCoreEd25519Signature extends U8aFixed {
    }
    /** @name SpCoreSr25519Signature (522) */
    interface SpCoreSr25519Signature extends U8aFixed {
    }
    /** @name SpCoreEcdsaSignature (523) */
    interface SpCoreEcdsaSignature extends U8aFixed {
    }
    /** @name FrameSystemExtensionsCheckNonZeroSender (526) */
    type FrameSystemExtensionsCheckNonZeroSender = Null;
    /** @name FrameSystemExtensionsCheckSpecVersion (527) */
    type FrameSystemExtensionsCheckSpecVersion = Null;
    /** @name FrameSystemExtensionsCheckTxVersion (528) */
    type FrameSystemExtensionsCheckTxVersion = Null;
    /** @name FrameSystemExtensionsCheckGenesis (529) */
    type FrameSystemExtensionsCheckGenesis = Null;
    /** @name FrameSystemExtensionsCheckNonce (532) */
    interface FrameSystemExtensionsCheckNonce extends Compact<u64> {
    }
    /** @name FrameSystemExtensionsCheckWeight (533) */
    type FrameSystemExtensionsCheckWeight = Null;
    /** @name PalletTransactionPaymentChargeTransactionPayment (534) */
    interface PalletTransactionPaymentChargeTransactionPayment extends Compact<u128> {
    }
    /** @name AutographParachainRuntimeRuntime (536) */
    type AutographParachainRuntimeRuntime = Null;
}
