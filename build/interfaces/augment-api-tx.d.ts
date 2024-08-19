import '@polkadot/api-base/types/submittable';
import type { ApiTypes, AugmentedSubmittable, SubmittableExtrinsic, SubmittableExtrinsicFunction } from '@polkadot/api-base/types';
import type { Bytes, Compact, Option, U256, U8aFixed, Vec, bool, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { AnyNumber, IMethod, ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, Call, H160, H256, MultiAddress, Permill, Perquintill } from '@polkadot/types/interfaces/runtime';
import type { AutographParachainRuntimeOriginCaller, AutographParachainRuntimeRole, AutographParachainRuntimeSessionKeys, CollectionPrimitivesCreateRftCollectionData, CollectionPrimitivesPropertiesProperty, CollectionPrimitivesPropertiesPropertyKeyPermission, CumulusPrimitivesParachainInherentParachainInherentData, EthereumTransactionTransactionV2, FrameSupportPreimagesBounded, FrameSupportScheduleDispatchTime, PalletConvictionVotingConviction, PalletConvictionVotingVoteAccountVote, PalletMultisigTimepoint, PalletRefungibleCreateItemData, PalletWhitelistAddInvestorData, SpWeightsWeightV2Weight, StagingXcmV3MultiLocation, StagingXcmV3WeightLimit, StagingXcmVersionedMultiAssets, StagingXcmVersionedMultiLocation, StagingXcmVersionedXcm } from '@polkadot/types/lookup';
export type __AugmentedSubmittable = AugmentedSubmittable<() => unknown>;
export type __SubmittableExtrinsic<ApiType extends ApiTypes> = SubmittableExtrinsic<ApiType>;
export type __SubmittableExtrinsicFunction<ApiType extends ApiTypes> = SubmittableExtrinsicFunction<ApiType>;
declare module '@polkadot/api-base/types/submittable' {
    interface AugmentedSubmittables<ApiType extends ApiTypes> {
        access: {
            /**
             * See [`Pallet::grant_role`].
             **/
            grantRole: AugmentedSubmittable<(account: AccountId32 | string | Uint8Array, role: AutographParachainRuntimeRole | 'AccessRoot' | 'WhitelistAdmin' | 'WhitelistManager' | 'Constructor' | number | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, AutographParachainRuntimeRole]>;
            /**
             * See [`Pallet::take_role`].
             **/
            takeRole: AugmentedSubmittable<(account: AccountId32 | string | Uint8Array, role: AutographParachainRuntimeRole | 'AccessRoot' | 'WhitelistAdmin' | 'WhitelistManager' | 'Constructor' | number | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, AutographParachainRuntimeRole]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        balances: {
            /**
             * See [`Pallet::force_set_balance`].
             **/
            forceSetBalance: AugmentedSubmittable<(who: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, newFree: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>]>;
            /**
             * See [`Pallet::force_transfer`].
             **/
            forceTransfer: AugmentedSubmittable<(source: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, dest: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, MultiAddress, Compact<u128>]>;
            /**
             * See [`Pallet::force_unreserve`].
             **/
            forceUnreserve: AugmentedSubmittable<(who: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u128]>;
            /**
             * See [`Pallet::set_balance_deprecated`].
             **/
            setBalanceDeprecated: AugmentedSubmittable<(who: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, newFree: Compact<u128> | AnyNumber | Uint8Array, oldReserved: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>, Compact<u128>]>;
            /**
             * See [`Pallet::transfer`].
             **/
            transfer: AugmentedSubmittable<(dest: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>]>;
            /**
             * See [`Pallet::transfer_all`].
             **/
            transferAll: AugmentedSubmittable<(dest: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, bool]>;
            /**
             * See [`Pallet::transfer_allow_death`].
             **/
            transferAllowDeath: AugmentedSubmittable<(dest: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>]>;
            /**
             * See [`Pallet::transfer_keep_alive`].
             **/
            transferKeepAlive: AugmentedSubmittable<(dest: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>]>;
            /**
             * See [`Pallet::upgrade_accounts`].
             **/
            upgradeAccounts: AugmentedSubmittable<(who: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        baseFee: {
            /**
             * See [`Pallet::set_base_fee_per_gas`].
             **/
            setBaseFeePerGas: AugmentedSubmittable<(fee: U256 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [U256]>;
            /**
             * See [`Pallet::set_elasticity`].
             **/
            setElasticity: AugmentedSubmittable<(elasticity: Permill | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Permill]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        bounties: {
            /**
             * See [`Pallet::accept_curator`].
             **/
            acceptCurator: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
            /**
             * See [`Pallet::approve_bounty`].
             **/
            approveBounty: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
            /**
             * See [`Pallet::award_bounty`].
             **/
            awardBounty: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array, beneficiary: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress]>;
            /**
             * See [`Pallet::claim_bounty`].
             **/
            claimBounty: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
            /**
             * See [`Pallet::close_bounty`].
             **/
            closeBounty: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
            /**
             * See [`Pallet::extend_bounty_expiry`].
             **/
            extendBountyExpiry: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array, remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Bytes]>;
            /**
             * See [`Pallet::propose_bounty`].
             **/
            proposeBounty: AugmentedSubmittable<(value: Compact<u128> | AnyNumber | Uint8Array, description: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, Bytes]>;
            /**
             * See [`Pallet::propose_curator`].
             **/
            proposeCurator: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array, curator: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, fee: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress, Compact<u128>]>;
            /**
             * See [`Pallet::unassign_curator`].
             **/
            unassignCurator: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        convictionVoting: {
            /**
             * See [`Pallet::delegate`].
             **/
            delegate: AugmentedSubmittable<(clazz: u16 | AnyNumber | Uint8Array, to: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, conviction: PalletConvictionVotingConviction | 'None' | 'Locked1x' | 'Locked2x' | 'Locked3x' | 'Locked4x' | 'Locked5x' | 'Locked6x' | number | Uint8Array, balance: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, MultiAddress, PalletConvictionVotingConviction, u128]>;
            /**
             * See [`Pallet::remove_other_vote`].
             **/
            removeOtherVote: AugmentedSubmittable<(target: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, clazz: u16 | AnyNumber | Uint8Array, index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u16, u32]>;
            /**
             * See [`Pallet::remove_vote`].
             **/
            removeVote: AugmentedSubmittable<(clazz: Option<u16> | null | Uint8Array | u16 | AnyNumber, index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Option<u16>, u32]>;
            /**
             * See [`Pallet::undelegate`].
             **/
            undelegate: AugmentedSubmittable<(clazz: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16]>;
            /**
             * See [`Pallet::unlock`].
             **/
            unlock: AugmentedSubmittable<(clazz: u16 | AnyNumber | Uint8Array, target: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, MultiAddress]>;
            /**
             * See [`Pallet::vote`].
             **/
            vote: AugmentedSubmittable<(pollIndex: Compact<u32> | AnyNumber | Uint8Array, vote: PalletConvictionVotingVoteAccountVote | {
                Standard: any;
            } | {
                Split: any;
            } | {
                SplitAbstain: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, PalletConvictionVotingVoteAccountVote]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        cumulusXcm: {
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        dmpQueue: {
            /**
             * See [`Pallet::service_overweight`].
             **/
            serviceOverweight: AugmentedSubmittable<(index: u64 | AnyNumber | Uint8Array, weightLimit: SpWeightsWeightV2Weight | {
                refTime?: any;
                proofSize?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64, SpWeightsWeightV2Weight]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        ethereum: {
            /**
             * See [`Pallet::transact`].
             **/
            transact: AugmentedSubmittable<(transaction: EthereumTransactionTransactionV2 | {
                Legacy: any;
            } | {
                EIP2930: any;
            } | {
                EIP1559: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [EthereumTransactionTransactionV2]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        evm: {
            /**
             * See [`Pallet::call`].
             **/
            call: AugmentedSubmittable<(source: H160 | string | Uint8Array, target: H160 | string | Uint8Array, input: Bytes | string | Uint8Array, value: U256 | AnyNumber | Uint8Array, gasLimit: u64 | AnyNumber | Uint8Array, maxFeePerGas: U256 | AnyNumber | Uint8Array, maxPriorityFeePerGas: Option<U256> | null | Uint8Array | U256 | AnyNumber, nonce: Option<U256> | null | Uint8Array | U256 | AnyNumber, accessList: Vec<ITuple<[H160, Vec<H256>]>> | ([H160 | string | Uint8Array, Vec<H256> | (H256 | string | Uint8Array)[]])[]) => SubmittableExtrinsic<ApiType>, [H160, H160, Bytes, U256, u64, U256, Option<U256>, Option<U256>, Vec<ITuple<[H160, Vec<H256>]>>]>;
            /**
             * See [`Pallet::create`].
             **/
            create: AugmentedSubmittable<(source: H160 | string | Uint8Array, init: Bytes | string | Uint8Array, value: U256 | AnyNumber | Uint8Array, gasLimit: u64 | AnyNumber | Uint8Array, maxFeePerGas: U256 | AnyNumber | Uint8Array, maxPriorityFeePerGas: Option<U256> | null | Uint8Array | U256 | AnyNumber, nonce: Option<U256> | null | Uint8Array | U256 | AnyNumber, accessList: Vec<ITuple<[H160, Vec<H256>]>> | ([H160 | string | Uint8Array, Vec<H256> | (H256 | string | Uint8Array)[]])[]) => SubmittableExtrinsic<ApiType>, [H160, Bytes, U256, u64, U256, Option<U256>, Option<U256>, Vec<ITuple<[H160, Vec<H256>]>>]>;
            /**
             * See [`Pallet::create2`].
             **/
            create2: AugmentedSubmittable<(source: H160 | string | Uint8Array, init: Bytes | string | Uint8Array, salt: H256 | string | Uint8Array, value: U256 | AnyNumber | Uint8Array, gasLimit: u64 | AnyNumber | Uint8Array, maxFeePerGas: U256 | AnyNumber | Uint8Array, maxPriorityFeePerGas: Option<U256> | null | Uint8Array | U256 | AnyNumber, nonce: Option<U256> | null | Uint8Array | U256 | AnyNumber, accessList: Vec<ITuple<[H160, Vec<H256>]>> | ([H160 | string | Uint8Array, Vec<H256> | (H256 | string | Uint8Array)[]])[]) => SubmittableExtrinsic<ApiType>, [H160, Bytes, H256, U256, u64, U256, Option<U256>, Option<U256>, Vec<ITuple<[H160, Vec<H256>]>>]>;
            /**
             * See [`Pallet::withdraw`].
             **/
            withdraw: AugmentedSubmittable<(address: H160 | string | Uint8Array, value: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [H160, u128]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        fellowshipCollective: {
            /**
             * See [`Pallet::add_member`].
             **/
            addMember: AugmentedSubmittable<(who: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
            /**
             * See [`Pallet::cleanup_poll`].
             **/
            cleanupPoll: AugmentedSubmittable<(pollIndex: u32 | AnyNumber | Uint8Array, max: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
            /**
             * See [`Pallet::demote_member`].
             **/
            demoteMember: AugmentedSubmittable<(who: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
            /**
             * See [`Pallet::promote_member`].
             **/
            promoteMember: AugmentedSubmittable<(who: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
            /**
             * See [`Pallet::remove_member`].
             **/
            removeMember: AugmentedSubmittable<(who: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, minRank: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u16]>;
            /**
             * See [`Pallet::vote`].
             **/
            vote: AugmentedSubmittable<(poll: u32 | AnyNumber | Uint8Array, aye: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, bool]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        fellowshipReferenda: {
            /**
             * See [`Pallet::cancel`].
             **/
            cancel: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
            /**
             * See [`Pallet::kill`].
             **/
            kill: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
            /**
             * See [`Pallet::nudge_referendum`].
             **/
            nudgeReferendum: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
            /**
             * See [`Pallet::one_fewer_deciding`].
             **/
            oneFewerDeciding: AugmentedSubmittable<(track: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16]>;
            /**
             * See [`Pallet::place_decision_deposit`].
             **/
            placeDecisionDeposit: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
            /**
             * See [`Pallet::refund_decision_deposit`].
             **/
            refundDecisionDeposit: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
            /**
             * See [`Pallet::refund_submission_deposit`].
             **/
            refundSubmissionDeposit: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
            /**
             * See [`Pallet::set_metadata`].
             **/
            setMetadata: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array, maybeHash: Option<H256> | null | Uint8Array | H256 | string) => SubmittableExtrinsic<ApiType>, [u32, Option<H256>]>;
            /**
             * See [`Pallet::submit`].
             **/
            submit: AugmentedSubmittable<(proposalOrigin: AutographParachainRuntimeOriginCaller | {
                system: any;
            } | {
                Void: any;
            } | {
                Origins: any;
            } | {
                CumulusXcm: any;
            } | {
                PolkadotXcm: any;
            } | {
                Ethereum: any;
            } | string | Uint8Array, proposal: FrameSupportPreimagesBounded | {
                Legacy: any;
            } | {
                Inline: any;
            } | {
                Lookup: any;
            } | string | Uint8Array, enactmentMoment: FrameSupportScheduleDispatchTime | {
                At: any;
            } | {
                After: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AutographParachainRuntimeOriginCaller, FrameSupportPreimagesBounded, FrameSupportScheduleDispatchTime]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        multisig: {
            /**
             * See [`Pallet::approve_as_multi`].
             **/
            approveAsMulti: AugmentedSubmittable<(threshold: u16 | AnyNumber | Uint8Array, otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], maybeTimepoint: Option<PalletMultisigTimepoint> | null | Uint8Array | PalletMultisigTimepoint | {
                height?: any;
                index?: any;
            } | string, callHash: U8aFixed | string | Uint8Array, maxWeight: SpWeightsWeightV2Weight | {
                refTime?: any;
                proofSize?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Vec<AccountId32>, Option<PalletMultisigTimepoint>, U8aFixed, SpWeightsWeightV2Weight]>;
            /**
             * See [`Pallet::as_multi`].
             **/
            asMulti: AugmentedSubmittable<(threshold: u16 | AnyNumber | Uint8Array, otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], maybeTimepoint: Option<PalletMultisigTimepoint> | null | Uint8Array | PalletMultisigTimepoint | {
                height?: any;
                index?: any;
            } | string, call: Call | IMethod | string | Uint8Array, maxWeight: SpWeightsWeightV2Weight | {
                refTime?: any;
                proofSize?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Vec<AccountId32>, Option<PalletMultisigTimepoint>, Call, SpWeightsWeightV2Weight]>;
            /**
             * See [`Pallet::as_multi_threshold_1`].
             **/
            asMultiThreshold1: AugmentedSubmittable<(otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>, Call]>;
            /**
             * See [`Pallet::cancel_as_multi`].
             **/
            cancelAsMulti: AugmentedSubmittable<(threshold: u16 | AnyNumber | Uint8Array, otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], timepoint: PalletMultisigTimepoint | {
                height?: any;
                index?: any;
            } | string | Uint8Array, callHash: U8aFixed | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Vec<AccountId32>, PalletMultisigTimepoint, U8aFixed]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        parachainInfo: {
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        parachainStaking: {
            /**
             * See [`Pallet::cancel_leave_candidates`].
             **/
            cancelLeaveCandidates: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            /**
             * See [`Pallet::candidate_stake_less`].
             **/
            candidateStakeLess: AugmentedSubmittable<(less: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
            /**
             * See [`Pallet::candidate_stake_more`].
             **/
            candidateStakeMore: AugmentedSubmittable<(more: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
            /**
             * See [`Pallet::claim_rewards`].
             **/
            claimRewards: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            /**
             * See [`Pallet::delegator_stake_less`].
             **/
            delegatorStakeLess: AugmentedSubmittable<(less: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
            /**
             * See [`Pallet::delegator_stake_more`].
             **/
            delegatorStakeMore: AugmentedSubmittable<(more: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
            /**
             * See [`Pallet::execute_leave_candidates`].
             **/
            executeLeaveCandidates: AugmentedSubmittable<(collator: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
            /**
             * See [`Pallet::execute_scheduled_reward_change`].
             **/
            executeScheduledRewardChange: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            /**
             * See [`Pallet::force_new_round`].
             **/
            forceNewRound: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            /**
             * See [`Pallet::force_remove_candidate`].
             **/
            forceRemoveCandidate: AugmentedSubmittable<(collator: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
            /**
             * See [`Pallet::increment_collator_rewards`].
             **/
            incrementCollatorRewards: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            /**
             * See [`Pallet::increment_delegator_rewards`].
             **/
            incrementDelegatorRewards: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            /**
             * See [`Pallet::init_leave_candidates`].
             **/
            initLeaveCandidates: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            /**
             * See [`Pallet::join_candidates`].
             **/
            joinCandidates: AugmentedSubmittable<(stake: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
            /**
             * See [`Pallet::join_delegators`].
             **/
            joinDelegators: AugmentedSubmittable<(collator: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u128]>;
            /**
             * See [`Pallet::leave_delegators`].
             **/
            leaveDelegators: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            /**
             * See [`Pallet::set_blocks_per_round`].
             **/
            setBlocksPerRound: AugmentedSubmittable<(updated: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64]>;
            /**
             * See [`Pallet::set_inflation`].
             **/
            setInflation: AugmentedSubmittable<(collatorMaxRatePercentage: Perquintill | AnyNumber | Uint8Array, collatorAnnualRewardRatePercentage: Perquintill | AnyNumber | Uint8Array, delegatorMaxRatePercentage: Perquintill | AnyNumber | Uint8Array, delegatorAnnualRewardRatePercentage: Perquintill | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Perquintill, Perquintill, Perquintill, Perquintill]>;
            /**
             * See [`Pallet::set_max_candidate_stake`].
             **/
            setMaxCandidateStake: AugmentedSubmittable<(updated: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
            /**
             * See [`Pallet::set_max_selected_candidates`].
             **/
            setMaxSelectedCandidates: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
            /**
             * See [`Pallet::unlock_unstaked`].
             **/
            unlockUnstaked: AugmentedSubmittable<(target: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        parachainSystem: {
            /**
             * See [`Pallet::authorize_upgrade`].
             **/
            authorizeUpgrade: AugmentedSubmittable<(codeHash: H256 | string | Uint8Array, checkVersion: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, bool]>;
            /**
             * See [`Pallet::enact_authorized_upgrade`].
             **/
            enactAuthorizedUpgrade: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
            /**
             * See [`Pallet::set_validation_data`].
             **/
            setValidationData: AugmentedSubmittable<(data: CumulusPrimitivesParachainInherentParachainInherentData | {
                validationData?: any;
                relayChainState?: any;
                downwardMessages?: any;
                horizontalMessages?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [CumulusPrimitivesParachainInherentParachainInherentData]>;
            /**
             * See [`Pallet::sudo_send_upward_message`].
             **/
            sudoSendUpwardMessage: AugmentedSubmittable<(message: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        polkadotXcm: {
            /**
             * See [`Pallet::execute`].
             **/
            execute: AugmentedSubmittable<(message: StagingXcmVersionedXcm | {
                V2: any;
            } | {
                V3: any;
            } | string | Uint8Array, maxWeight: SpWeightsWeightV2Weight | {
                refTime?: any;
                proofSize?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedXcm, SpWeightsWeightV2Weight]>;
            /**
             * See [`Pallet::force_default_xcm_version`].
             **/
            forceDefaultXcmVersion: AugmentedSubmittable<(maybeXcmVersion: Option<u32> | null | Uint8Array | u32 | AnyNumber) => SubmittableExtrinsic<ApiType>, [Option<u32>]>;
            /**
             * See [`Pallet::force_subscribe_version_notify`].
             **/
            forceSubscribeVersionNotify: AugmentedSubmittable<(location: StagingXcmVersionedMultiLocation | {
                V2: any;
            } | {
                V3: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedMultiLocation]>;
            /**
             * See [`Pallet::force_suspension`].
             **/
            forceSuspension: AugmentedSubmittable<(suspended: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [bool]>;
            /**
             * See [`Pallet::force_unsubscribe_version_notify`].
             **/
            forceUnsubscribeVersionNotify: AugmentedSubmittable<(location: StagingXcmVersionedMultiLocation | {
                V2: any;
            } | {
                V3: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedMultiLocation]>;
            /**
             * See [`Pallet::force_xcm_version`].
             **/
            forceXcmVersion: AugmentedSubmittable<(location: StagingXcmV3MultiLocation | {
                parents?: any;
                interior?: any;
            } | string | Uint8Array, version: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV3MultiLocation, u32]>;
            /**
             * See [`Pallet::limited_reserve_transfer_assets`].
             **/
            limitedReserveTransferAssets: AugmentedSubmittable<(dest: StagingXcmVersionedMultiLocation | {
                V2: any;
            } | {
                V3: any;
            } | string | Uint8Array, beneficiary: StagingXcmVersionedMultiLocation | {
                V2: any;
            } | {
                V3: any;
            } | string | Uint8Array, assets: StagingXcmVersionedMultiAssets | {
                V2: any;
            } | {
                V3: any;
            } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array, weightLimit: StagingXcmV3WeightLimit | {
                Unlimited: any;
            } | {
                Limited: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedMultiLocation, StagingXcmVersionedMultiLocation, StagingXcmVersionedMultiAssets, u32, StagingXcmV3WeightLimit]>;
            /**
             * See [`Pallet::limited_teleport_assets`].
             **/
            limitedTeleportAssets: AugmentedSubmittable<(dest: StagingXcmVersionedMultiLocation | {
                V2: any;
            } | {
                V3: any;
            } | string | Uint8Array, beneficiary: StagingXcmVersionedMultiLocation | {
                V2: any;
            } | {
                V3: any;
            } | string | Uint8Array, assets: StagingXcmVersionedMultiAssets | {
                V2: any;
            } | {
                V3: any;
            } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array, weightLimit: StagingXcmV3WeightLimit | {
                Unlimited: any;
            } | {
                Limited: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedMultiLocation, StagingXcmVersionedMultiLocation, StagingXcmVersionedMultiAssets, u32, StagingXcmV3WeightLimit]>;
            /**
             * See [`Pallet::reserve_transfer_assets`].
             **/
            reserveTransferAssets: AugmentedSubmittable<(dest: StagingXcmVersionedMultiLocation | {
                V2: any;
            } | {
                V3: any;
            } | string | Uint8Array, beneficiary: StagingXcmVersionedMultiLocation | {
                V2: any;
            } | {
                V3: any;
            } | string | Uint8Array, assets: StagingXcmVersionedMultiAssets | {
                V2: any;
            } | {
                V3: any;
            } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedMultiLocation, StagingXcmVersionedMultiLocation, StagingXcmVersionedMultiAssets, u32]>;
            /**
             * See [`Pallet::send`].
             **/
            send: AugmentedSubmittable<(dest: StagingXcmVersionedMultiLocation | {
                V2: any;
            } | {
                V3: any;
            } | string | Uint8Array, message: StagingXcmVersionedXcm | {
                V2: any;
            } | {
                V3: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedMultiLocation, StagingXcmVersionedXcm]>;
            /**
             * See [`Pallet::teleport_assets`].
             **/
            teleportAssets: AugmentedSubmittable<(dest: StagingXcmVersionedMultiLocation | {
                V2: any;
            } | {
                V3: any;
            } | string | Uint8Array, beneficiary: StagingXcmVersionedMultiLocation | {
                V2: any;
            } | {
                V3: any;
            } | string | Uint8Array, assets: StagingXcmVersionedMultiAssets | {
                V2: any;
            } | {
                V3: any;
            } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedMultiLocation, StagingXcmVersionedMultiLocation, StagingXcmVersionedMultiAssets, u32]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        preimage: {
            /**
             * See [`Pallet::note_preimage`].
             **/
            notePreimage: AugmentedSubmittable<(bytes: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
            /**
             * See [`Pallet::request_preimage`].
             **/
            requestPreimage: AugmentedSubmittable<(hash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
            /**
             * See [`Pallet::unnote_preimage`].
             **/
            unnotePreimage: AugmentedSubmittable<(hash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
            /**
             * See [`Pallet::unrequest_preimage`].
             **/
            unrequestPreimage: AugmentedSubmittable<(hash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        referenda: {
            /**
             * See [`Pallet::cancel`].
             **/
            cancel: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
            /**
             * See [`Pallet::kill`].
             **/
            kill: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
            /**
             * See [`Pallet::nudge_referendum`].
             **/
            nudgeReferendum: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
            /**
             * See [`Pallet::one_fewer_deciding`].
             **/
            oneFewerDeciding: AugmentedSubmittable<(track: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16]>;
            /**
             * See [`Pallet::place_decision_deposit`].
             **/
            placeDecisionDeposit: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
            /**
             * See [`Pallet::refund_decision_deposit`].
             **/
            refundDecisionDeposit: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
            /**
             * See [`Pallet::refund_submission_deposit`].
             **/
            refundSubmissionDeposit: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
            /**
             * See [`Pallet::set_metadata`].
             **/
            setMetadata: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array, maybeHash: Option<H256> | null | Uint8Array | H256 | string) => SubmittableExtrinsic<ApiType>, [u32, Option<H256>]>;
            /**
             * See [`Pallet::submit`].
             **/
            submit: AugmentedSubmittable<(proposalOrigin: AutographParachainRuntimeOriginCaller | {
                system: any;
            } | {
                Void: any;
            } | {
                Origins: any;
            } | {
                CumulusXcm: any;
            } | {
                PolkadotXcm: any;
            } | {
                Ethereum: any;
            } | string | Uint8Array, proposal: FrameSupportPreimagesBounded | {
                Legacy: any;
            } | {
                Inline: any;
            } | {
                Lookup: any;
            } | string | Uint8Array, enactmentMoment: FrameSupportScheduleDispatchTime | {
                At: any;
            } | {
                After: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AutographParachainRuntimeOriginCaller, FrameSupportPreimagesBounded, FrameSupportScheduleDispatchTime]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        refungible: {
            /**
             * See [`Pallet::burn`].
             **/
            burn: AugmentedSubmittable<(collectionId: u32 | AnyNumber | Uint8Array, tokenId: u32 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u128]>;
            /**
             * See [`Pallet::burn_from`].
             **/
            burnFrom: AugmentedSubmittable<(collectionId: u32 | AnyNumber | Uint8Array, tokenId: u32 | AnyNumber | Uint8Array, from: AccountId32 | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, AccountId32, u128]>;
            /**
             * See [`Pallet::create_item`].
             **/
            createItem: AugmentedSubmittable<(collectionId: u32 | AnyNumber | Uint8Array, data: PalletRefungibleCreateItemData | {
                balances?: any;
                properties?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, PalletRefungibleCreateItemData]>;
            /**
             * See [`Pallet::create_multiple_items`].
             **/
            createMultipleItems: AugmentedSubmittable<(collectionId: u32 | AnyNumber | Uint8Array, data: Vec<PalletRefungibleCreateItemData> | (PalletRefungibleCreateItemData | {
                balances?: any;
                properties?: any;
            } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [u32, Vec<PalletRefungibleCreateItemData>]>;
            /**
             * See [`Pallet::delete_collection_properties`].
             **/
            deleteCollectionProperties: AugmentedSubmittable<(collectionId: u32 | AnyNumber | Uint8Array, propertyKeys: Vec<Bytes> | (Bytes | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [u32, Vec<Bytes>]>;
            /**
             * See [`Pallet::delete_collection_property`].
             **/
            deleteCollectionProperty: AugmentedSubmittable<(collectionId: u32 | AnyNumber | Uint8Array, propertyKey: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Bytes]>;
            /**
             * See [`Pallet::delete_token_properties`].
             **/
            deleteTokenProperties: AugmentedSubmittable<(collectionId: u32 | AnyNumber | Uint8Array, tokenId: u32 | AnyNumber | Uint8Array, propertiesKeys: Vec<Bytes> | (Bytes | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [u32, u32, Vec<Bytes>]>;
            /**
             * See [`Pallet::delete_token_property`].
             **/
            deleteTokenProperty: AugmentedSubmittable<(collectionId: u32 | AnyNumber | Uint8Array, tokenId: u32 | AnyNumber | Uint8Array, propertyKey: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, Bytes]>;
            /**
             * See [`Pallet::destroy_collection`].
             **/
            destroyCollection: AugmentedSubmittable<(collectionId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
            /**
             * See [`Pallet::init_collection`].
             **/
            initCollection: AugmentedSubmittable<(data: CollectionPrimitivesCreateRftCollectionData | {
                name?: any;
                description?: any;
                tokenPrefix?: any;
                limits?: any;
                propertyPermissions?: any;
                properties?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [CollectionPrimitivesCreateRftCollectionData]>;
            /**
             * See [`Pallet::mint_additional_pieces`].
             **/
            mintAdditionalPieces: AugmentedSubmittable<(collectionId: u32 | AnyNumber | Uint8Array, tokenId: u32 | AnyNumber | Uint8Array, to: AccountId32 | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, AccountId32, u128]>;
            /**
             * See [`Pallet::repartition`].
             **/
            repartition: AugmentedSubmittable<(collectionId: u32 | AnyNumber | Uint8Array, tokenId: u32 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u128]>;
            /**
             * See [`Pallet::set_allowance`].
             **/
            setAllowance: AugmentedSubmittable<(collectionId: u32 | AnyNumber | Uint8Array, tokenId: u32 | AnyNumber | Uint8Array, spender: AccountId32 | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, AccountId32, u128]>;
            /**
             * See [`Pallet::set_collection_properties`].
             **/
            setCollectionProperties: AugmentedSubmittable<(collectionId: u32 | AnyNumber | Uint8Array, properties: Vec<CollectionPrimitivesPropertiesProperty> | (CollectionPrimitivesPropertiesProperty | {
                key?: any;
                value?: any;
            } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [u32, Vec<CollectionPrimitivesPropertiesProperty>]>;
            /**
             * See [`Pallet::set_collection_property`].
             **/
            setCollectionProperty: AugmentedSubmittable<(collectionId: u32 | AnyNumber | Uint8Array, property: CollectionPrimitivesPropertiesProperty | {
                key?: any;
                value?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, CollectionPrimitivesPropertiesProperty]>;
            /**
             * See [`Pallet::set_property_permission`].
             **/
            setPropertyPermission: AugmentedSubmittable<(collectionId: u32 | AnyNumber | Uint8Array, propertyPermission: CollectionPrimitivesPropertiesPropertyKeyPermission | {
                key?: any;
                permission?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, CollectionPrimitivesPropertiesPropertyKeyPermission]>;
            /**
             * See [`Pallet::set_token_properties`].
             **/
            setTokenProperties: AugmentedSubmittable<(collectionId: u32 | AnyNumber | Uint8Array, tokenId: u32 | AnyNumber | Uint8Array, properties: Vec<CollectionPrimitivesPropertiesProperty> | (CollectionPrimitivesPropertiesProperty | {
                key?: any;
                value?: any;
            } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [u32, u32, Vec<CollectionPrimitivesPropertiesProperty>]>;
            /**
             * See [`Pallet::set_token_property`].
             **/
            setTokenProperty: AugmentedSubmittable<(collectionId: u32 | AnyNumber | Uint8Array, tokenId: u32 | AnyNumber | Uint8Array, property: CollectionPrimitivesPropertiesProperty | {
                key?: any;
                value?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, CollectionPrimitivesPropertiesProperty]>;
            /**
             * See [`Pallet::transfer`].
             **/
            transfer: AugmentedSubmittable<(collectionId: u32 | AnyNumber | Uint8Array, tokenId: u32 | AnyNumber | Uint8Array, to: AccountId32 | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, AccountId32, u128]>;
            /**
             * See [`Pallet::transfer_from`].
             **/
            transferFrom: AugmentedSubmittable<(collectionId: u32 | AnyNumber | Uint8Array, tokenId: u32 | AnyNumber | Uint8Array, from: AccountId32 | string | Uint8Array, to: AccountId32 | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, AccountId32, AccountId32, u128]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        scheduler: {
            /**
             * See [`Pallet::cancel`].
             **/
            cancel: AugmentedSubmittable<(when: u64 | AnyNumber | Uint8Array, index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64, u32]>;
            /**
             * See [`Pallet::cancel_named`].
             **/
            cancelNamed: AugmentedSubmittable<(id: U8aFixed | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [U8aFixed]>;
            /**
             * See [`Pallet::schedule`].
             **/
            schedule: AugmentedSubmittable<(when: u64 | AnyNumber | Uint8Array, maybePeriodic: Option<ITuple<[u64, u32]>> | null | Uint8Array | ITuple<[u64, u32]> | [u64 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], priority: u8 | AnyNumber | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64, Option<ITuple<[u64, u32]>>, u8, Call]>;
            /**
             * See [`Pallet::schedule_after`].
             **/
            scheduleAfter: AugmentedSubmittable<(after: u64 | AnyNumber | Uint8Array, maybePeriodic: Option<ITuple<[u64, u32]>> | null | Uint8Array | ITuple<[u64, u32]> | [u64 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], priority: u8 | AnyNumber | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64, Option<ITuple<[u64, u32]>>, u8, Call]>;
            /**
             * See [`Pallet::schedule_named`].
             **/
            scheduleNamed: AugmentedSubmittable<(id: U8aFixed | string | Uint8Array, when: u64 | AnyNumber | Uint8Array, maybePeriodic: Option<ITuple<[u64, u32]>> | null | Uint8Array | ITuple<[u64, u32]> | [u64 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], priority: u8 | AnyNumber | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [U8aFixed, u64, Option<ITuple<[u64, u32]>>, u8, Call]>;
            /**
             * See [`Pallet::schedule_named_after`].
             **/
            scheduleNamedAfter: AugmentedSubmittable<(id: U8aFixed | string | Uint8Array, after: u64 | AnyNumber | Uint8Array, maybePeriodic: Option<ITuple<[u64, u32]>> | null | Uint8Array | ITuple<[u64, u32]> | [u64 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], priority: u8 | AnyNumber | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [U8aFixed, u64, Option<ITuple<[u64, u32]>>, u8, Call]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        session: {
            /**
             * See [`Pallet::purge_keys`].
             **/
            purgeKeys: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            /**
             * See [`Pallet::set_keys`].
             **/
            setKeys: AugmentedSubmittable<(keys: AutographParachainRuntimeSessionKeys | {
                aura?: any;
            } | string | Uint8Array, proof: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AutographParachainRuntimeSessionKeys, Bytes]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        sudo: {
            /**
             * See [`Pallet::set_key`].
             **/
            setKey: AugmentedSubmittable<(updated: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
            /**
             * See [`Pallet::sudo`].
             **/
            sudo: AugmentedSubmittable<(call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call]>;
            /**
             * See [`Pallet::sudo_as`].
             **/
            sudoAs: AugmentedSubmittable<(who: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Call]>;
            /**
             * See [`Pallet::sudo_unchecked_weight`].
             **/
            sudoUncheckedWeight: AugmentedSubmittable<(call: Call | IMethod | string | Uint8Array, weight: SpWeightsWeightV2Weight | {
                refTime?: any;
                proofSize?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call, SpWeightsWeightV2Weight]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        system: {
            /**
             * See [`Pallet::kill_prefix`].
             **/
            killPrefix: AugmentedSubmittable<(prefix: Bytes | string | Uint8Array, subkeys: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, u32]>;
            /**
             * See [`Pallet::kill_storage`].
             **/
            killStorage: AugmentedSubmittable<(keys: Vec<Bytes> | (Bytes | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Bytes>]>;
            /**
             * See [`Pallet::remark`].
             **/
            remark: AugmentedSubmittable<(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
            /**
             * See [`Pallet::remark_with_event`].
             **/
            remarkWithEvent: AugmentedSubmittable<(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
            /**
             * See [`Pallet::set_code`].
             **/
            setCode: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
            /**
             * See [`Pallet::set_code_without_checks`].
             **/
            setCodeWithoutChecks: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
            /**
             * See [`Pallet::set_heap_pages`].
             **/
            setHeapPages: AugmentedSubmittable<(pages: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64]>;
            /**
             * See [`Pallet::set_storage`].
             **/
            setStorage: AugmentedSubmittable<(items: Vec<ITuple<[Bytes, Bytes]>> | ([Bytes | string | Uint8Array, Bytes | string | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[Bytes, Bytes]>>]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        timestamp: {
            /**
             * See [`Pallet::set`].
             **/
            set: AugmentedSubmittable<(now: Compact<u64> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u64>]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        treasury: {
            /**
             * See [`Pallet::approve_proposal`].
             **/
            approveProposal: AugmentedSubmittable<(proposalId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
            /**
             * See [`Pallet::propose_spend`].
             **/
            proposeSpend: AugmentedSubmittable<(value: Compact<u128> | AnyNumber | Uint8Array, beneficiary: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, MultiAddress]>;
            /**
             * See [`Pallet::reject_proposal`].
             **/
            rejectProposal: AugmentedSubmittable<(proposalId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
            /**
             * See [`Pallet::remove_approval`].
             **/
            removeApproval: AugmentedSubmittable<(proposalId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
            /**
             * See [`Pallet::spend`].
             **/
            spend: AugmentedSubmittable<(amount: Compact<u128> | AnyNumber | Uint8Array, beneficiary: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, MultiAddress]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        txPause: {
            /**
             * See [`Pallet::pause`].
             **/
            pause: AugmentedSubmittable<(fullName: ITuple<[Bytes, Bytes]> | [Bytes | string | Uint8Array, Bytes | string | Uint8Array]) => SubmittableExtrinsic<ApiType>, [ITuple<[Bytes, Bytes]>]>;
            /**
             * See [`Pallet::unpause`].
             **/
            unpause: AugmentedSubmittable<(ident: ITuple<[Bytes, Bytes]> | [Bytes | string | Uint8Array, Bytes | string | Uint8Array]) => SubmittableExtrinsic<ApiType>, [ITuple<[Bytes, Bytes]>]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        whitelist: {
            /**
             * See [`Pallet::add_investor`].
             **/
            addInvestor: AugmentedSubmittable<(investor: PalletWhitelistAddInvestorData | {
                key?: any;
                account?: any;
                isActive?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletWhitelistAddInvestorData]>;
            /**
             * See [`Pallet::remove_investor`].
             **/
            removeInvestor: AugmentedSubmittable<(key: U8aFixed | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [U8aFixed]>;
            /**
             * See [`Pallet::toggle_investor_status`].
             **/
            toggleInvestorStatus: AugmentedSubmittable<(key: U8aFixed | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [U8aFixed]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        whitelistFrame: {
            /**
             * See [`Pallet::dispatch_whitelisted_call`].
             **/
            dispatchWhitelistedCall: AugmentedSubmittable<(callHash: H256 | string | Uint8Array, callEncodedLen: u32 | AnyNumber | Uint8Array, callWeightWitness: SpWeightsWeightV2Weight | {
                refTime?: any;
                proofSize?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, u32, SpWeightsWeightV2Weight]>;
            /**
             * See [`Pallet::dispatch_whitelisted_call_with_preimage`].
             **/
            dispatchWhitelistedCallWithPreimage: AugmentedSubmittable<(call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call]>;
            /**
             * See [`Pallet::remove_whitelisted_call`].
             **/
            removeWhitelistedCall: AugmentedSubmittable<(callHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
            /**
             * See [`Pallet::whitelist_call`].
             **/
            whitelistCall: AugmentedSubmittable<(callHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        xcmpQueue: {
            /**
             * See [`Pallet::resume_xcm_execution`].
             **/
            resumeXcmExecution: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            /**
             * See [`Pallet::service_overweight`].
             **/
            serviceOverweight: AugmentedSubmittable<(index: u64 | AnyNumber | Uint8Array, weightLimit: SpWeightsWeightV2Weight | {
                refTime?: any;
                proofSize?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64, SpWeightsWeightV2Weight]>;
            /**
             * See [`Pallet::suspend_xcm_execution`].
             **/
            suspendXcmExecution: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            /**
             * See [`Pallet::update_drop_threshold`].
             **/
            updateDropThreshold: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
            /**
             * See [`Pallet::update_resume_threshold`].
             **/
            updateResumeThreshold: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
            /**
             * See [`Pallet::update_suspend_threshold`].
             **/
            updateSuspendThreshold: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
            /**
             * See [`Pallet::update_threshold_weight`].
             **/
            updateThresholdWeight: AugmentedSubmittable<(updated: SpWeightsWeightV2Weight | {
                refTime?: any;
                proofSize?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpWeightsWeightV2Weight]>;
            /**
             * See [`Pallet::update_weight_restrict_decay`].
             **/
            updateWeightRestrictDecay: AugmentedSubmittable<(updated: SpWeightsWeightV2Weight | {
                refTime?: any;
                proofSize?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpWeightsWeightV2Weight]>;
            /**
             * See [`Pallet::update_xcmp_max_individual_weight`].
             **/
            updateXcmpMaxIndividualWeight: AugmentedSubmittable<(updated: SpWeightsWeightV2Weight | {
                refTime?: any;
                proofSize?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpWeightsWeightV2Weight]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
    }
}
