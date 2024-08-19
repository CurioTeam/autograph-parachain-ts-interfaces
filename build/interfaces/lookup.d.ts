declare const _default: {
    /**
     * Lookup3: frame_system::AccountInfo<Nonce, pallet_balances::types::AccountData<Balance>>
     **/
    FrameSystemAccountInfo: {
        nonce: string;
        consumers: string;
        providers: string;
        sufficients: string;
        data: string;
    };
    /**
     * Lookup5: pallet_balances::types::AccountData<Balance>
     **/
    PalletBalancesAccountData: {
        free: string;
        reserved: string;
        frozen: string;
        flags: string;
    };
    /**
     * Lookup9: frame_support::dispatch::PerDispatchClass<sp_weights::weight_v2::Weight>
     **/
    FrameSupportDispatchPerDispatchClassWeight: {
        normal: string;
        operational: string;
        mandatory: string;
    };
    /**
     * Lookup10: sp_weights::weight_v2::Weight
     **/
    SpWeightsWeightV2Weight: {
        refTime: string;
        proofSize: string;
    };
    /**
     * Lookup14: sp_runtime::generic::digest::Digest
     **/
    SpRuntimeDigest: {
        logs: string;
    };
    /**
     * Lookup16: sp_runtime::generic::digest::DigestItem
     **/
    SpRuntimeDigestDigestItem: {
        _enum: {
            Other: string;
            __Unused1: string;
            __Unused2: string;
            __Unused3: string;
            Consensus: string;
            Seal: string;
            PreRuntime: string;
            __Unused7: string;
            RuntimeEnvironmentUpdated: string;
        };
    };
    /**
     * Lookup19: frame_system::EventRecord<autograph_parachain_runtime::RuntimeEvent, primitive_types::H256>
     **/
    FrameSystemEventRecord: {
        phase: string;
        event: string;
        topics: string;
    };
    /**
     * Lookup21: frame_system::pallet::Event<T>
     **/
    FrameSystemEvent: {
        _enum: {
            ExtrinsicSuccess: {
                dispatchInfo: string;
            };
            ExtrinsicFailed: {
                dispatchError: string;
                dispatchInfo: string;
            };
            CodeUpdated: string;
            NewAccount: {
                account: string;
            };
            KilledAccount: {
                account: string;
            };
            Remarked: {
                _alias: {
                    hash_: string;
                };
                sender: string;
                hash_: string;
            };
        };
    };
    /**
     * Lookup22: frame_support::dispatch::DispatchInfo
     **/
    FrameSupportDispatchDispatchInfo: {
        weight: string;
        class: string;
        paysFee: string;
    };
    /**
     * Lookup23: frame_support::dispatch::DispatchClass
     **/
    FrameSupportDispatchDispatchClass: {
        _enum: string[];
    };
    /**
     * Lookup24: frame_support::dispatch::Pays
     **/
    FrameSupportDispatchPays: {
        _enum: string[];
    };
    /**
     * Lookup25: sp_runtime::DispatchError
     **/
    SpRuntimeDispatchError: {
        _enum: {
            Other: string;
            CannotLookup: string;
            BadOrigin: string;
            Module: string;
            ConsumerRemaining: string;
            NoProviders: string;
            TooManyConsumers: string;
            Token: string;
            Arithmetic: string;
            Transactional: string;
            Exhausted: string;
            Corruption: string;
            Unavailable: string;
            RootNotAllowed: string;
        };
    };
    /**
     * Lookup26: sp_runtime::ModuleError
     **/
    SpRuntimeModuleError: {
        index: string;
        error: string;
    };
    /**
     * Lookup27: sp_runtime::TokenError
     **/
    SpRuntimeTokenError: {
        _enum: string[];
    };
    /**
     * Lookup28: sp_arithmetic::ArithmeticError
     **/
    SpArithmeticArithmeticError: {
        _enum: string[];
    };
    /**
     * Lookup29: sp_runtime::TransactionalError
     **/
    SpRuntimeTransactionalError: {
        _enum: string[];
    };
    /**
     * Lookup30: cumulus_pallet_parachain_system::pallet::Event<T>
     **/
    CumulusPalletParachainSystemEvent: {
        _enum: {
            ValidationFunctionStored: string;
            ValidationFunctionApplied: {
                relayChainBlockNum: string;
            };
            ValidationFunctionDiscarded: string;
            UpgradeAuthorized: {
                codeHash: string;
            };
            DownwardMessagesReceived: {
                count: string;
            };
            DownwardMessagesProcessed: {
                weightUsed: string;
                dmqHead: string;
            };
            UpwardMessageSent: {
                messageHash: string;
            };
        };
    };
    /**
     * Lookup32: pallet_balances::pallet::Event<T, I>
     **/
    PalletBalancesEvent: {
        _enum: {
            Endowed: {
                account: string;
                freeBalance: string;
            };
            DustLost: {
                account: string;
                amount: string;
            };
            Transfer: {
                from: string;
                to: string;
                amount: string;
            };
            BalanceSet: {
                who: string;
                free: string;
            };
            Reserved: {
                who: string;
                amount: string;
            };
            Unreserved: {
                who: string;
                amount: string;
            };
            ReserveRepatriated: {
                from: string;
                to: string;
                amount: string;
                destinationStatus: string;
            };
            Deposit: {
                who: string;
                amount: string;
            };
            Withdraw: {
                who: string;
                amount: string;
            };
            Slashed: {
                who: string;
                amount: string;
            };
            Minted: {
                who: string;
                amount: string;
            };
            Burned: {
                who: string;
                amount: string;
            };
            Suspended: {
                who: string;
                amount: string;
            };
            Restored: {
                who: string;
                amount: string;
            };
            Upgraded: {
                who: string;
            };
            Issued: {
                amount: string;
            };
            Rescinded: {
                amount: string;
            };
            Locked: {
                who: string;
                amount: string;
            };
            Unlocked: {
                who: string;
                amount: string;
            };
            Frozen: {
                who: string;
                amount: string;
            };
            Thawed: {
                who: string;
                amount: string;
            };
        };
    };
    /**
     * Lookup33: frame_support::traits::tokens::misc::BalanceStatus
     **/
    FrameSupportTokensMiscBalanceStatus: {
        _enum: string[];
    };
    /**
     * Lookup34: pallet_bounties::pallet::Event<T, I>
     **/
    PalletBountiesEvent: {
        _enum: {
            BountyProposed: {
                index: string;
            };
            BountyRejected: {
                index: string;
                bond: string;
            };
            BountyBecameActive: {
                index: string;
            };
            BountyAwarded: {
                index: string;
                beneficiary: string;
            };
            BountyClaimed: {
                index: string;
                payout: string;
                beneficiary: string;
            };
            BountyCanceled: {
                index: string;
            };
            BountyExtended: {
                index: string;
            };
        };
    };
    /**
     * Lookup35: pallet_transaction_payment::pallet::Event<T>
     **/
    PalletTransactionPaymentEvent: {
        _enum: {
            TransactionFeePaid: {
                who: string;
                actualFee: string;
                tip: string;
            };
        };
    };
    /**
     * Lookup36: pallet_treasury::pallet::Event<T, I>
     **/
    PalletTreasuryEvent: {
        _enum: {
            Proposed: {
                proposalIndex: string;
            };
            Spending: {
                budgetRemaining: string;
            };
            Awarded: {
                proposalIndex: string;
                award: string;
                account: string;
            };
            Rejected: {
                proposalIndex: string;
                slashed: string;
            };
            Burnt: {
                burntFunds: string;
            };
            Rollover: {
                rolloverBalance: string;
            };
            Deposit: {
                value: string;
            };
            SpendApproved: {
                proposalIndex: string;
                amount: string;
                beneficiary: string;
            };
            UpdatedInactive: {
                reactivated: string;
                deactivated: string;
            };
        };
    };
    /**
     * Lookup37: pallet_session::pallet::Event
     **/
    PalletSessionEvent: {
        _enum: {
            NewSession: {
                sessionIndex: string;
            };
        };
    };
    /**
     * Lookup38: parachain_staking::pallet::Event<T>
     **/
    ParachainStakingEvent: {
        _enum: {
            NewRound: string;
            EnteredTopCandidates: string;
            LeftTopCandidates: string;
            JoinedCollatorCandidates: string;
            CollatorStakedMore: string;
            CollatorStakedLess: string;
            CollatorScheduledExit: string;
            CollatorCanceledExit: string;
            CandidateLeft: string;
            CollatorRemoved: string;
            MaxCandidateStakeChanged: string;
            DelegatorStakedMore: string;
            DelegatorStakedLess: string;
            DelegatorLeft: string;
            Delegation: string;
            DelegationReplaced: string;
            DelegatorLeftCollator: string;
            Rewarded: string;
            RoundInflationSet: string;
            MaxSelectedCandidatesSet: string;
            BlocksPerRoundSet: string;
        };
    };
    /**
     * Lookup40: pallet_conviction_voting::pallet::Event<T, I>
     **/
    PalletConvictionVotingEvent: {
        _enum: {
            Delegated: string;
            Undelegated: string;
        };
    };
    /**
     * Lookup41: pallet_ranked_collective::pallet::Event<T, I>
     **/
    PalletRankedCollectiveEvent: {
        _enum: {
            MemberAdded: {
                who: string;
            };
            RankChanged: {
                who: string;
                rank: string;
            };
            MemberRemoved: {
                who: string;
                rank: string;
            };
            Voted: {
                who: string;
                poll: string;
                vote: string;
                tally: string;
            };
        };
    };
    /**
     * Lookup43: pallet_ranked_collective::VoteRecord
     **/
    PalletRankedCollectiveVoteRecord: {
        _enum: {
            Aye: string;
            Nay: string;
        };
    };
    /**
     * Lookup44: pallet_ranked_collective::Tally<T, I, M>
     **/
    PalletRankedCollectiveTally: {
        bareAyes: string;
        ayes: string;
        nays: string;
    };
    /**
     * Lookup45: pallet_referenda::pallet::Event<T, I>
     **/
    PalletReferendaEvent: {
        _enum: {
            Submitted: {
                index: string;
                track: string;
                proposal: string;
            };
            DecisionDepositPlaced: {
                index: string;
                who: string;
                amount: string;
            };
            DecisionDepositRefunded: {
                index: string;
                who: string;
                amount: string;
            };
            DepositSlashed: {
                who: string;
                amount: string;
            };
            DecisionStarted: {
                index: string;
                track: string;
                proposal: string;
                tally: string;
            };
            ConfirmStarted: {
                index: string;
            };
            ConfirmAborted: {
                index: string;
            };
            Confirmed: {
                index: string;
                tally: string;
            };
            Approved: {
                index: string;
            };
            Rejected: {
                index: string;
                tally: string;
            };
            TimedOut: {
                index: string;
                tally: string;
            };
            Cancelled: {
                index: string;
                tally: string;
            };
            Killed: {
                index: string;
                tally: string;
            };
            SubmissionDepositRefunded: {
                index: string;
                who: string;
                amount: string;
            };
            MetadataSet: {
                _alias: {
                    hash_: string;
                };
                index: string;
                hash_: string;
            };
            MetadataCleared: {
                _alias: {
                    hash_: string;
                };
                index: string;
                hash_: string;
            };
        };
    };
    /**
     * Lookup46: frame_support::traits::preimages::Bounded<autograph_parachain_runtime::RuntimeCall>
     **/
    FrameSupportPreimagesBounded: {
        _enum: {
            Legacy: {
                _alias: {
                    hash_: string;
                };
                hash_: string;
            };
            Inline: string;
            Lookup: {
                _alias: {
                    hash_: string;
                };
                hash_: string;
                len: string;
            };
        };
    };
    /**
     * Lookup48: frame_system::pallet::Call<T>
     **/
    FrameSystemCall: {
        _enum: {
            remark: {
                remark: string;
            };
            set_heap_pages: {
                pages: string;
            };
            set_code: {
                code: string;
            };
            set_code_without_checks: {
                code: string;
            };
            set_storage: {
                items: string;
            };
            kill_storage: {
                _alias: {
                    keys_: string;
                };
                keys_: string;
            };
            kill_prefix: {
                prefix: string;
                subkeys: string;
            };
            remark_with_event: {
                remark: string;
            };
        };
    };
    /**
     * Lookup52: cumulus_pallet_parachain_system::pallet::Call<T>
     **/
    CumulusPalletParachainSystemCall: {
        _enum: {
            set_validation_data: {
                data: string;
            };
            sudo_send_upward_message: {
                message: string;
            };
            authorize_upgrade: {
                codeHash: string;
                checkVersion: string;
            };
            enact_authorized_upgrade: {
                code: string;
            };
        };
    };
    /**
     * Lookup53: cumulus_primitives_parachain_inherent::ParachainInherentData
     **/
    CumulusPrimitivesParachainInherentParachainInherentData: {
        validationData: string;
        relayChainState: string;
        downwardMessages: string;
        horizontalMessages: string;
    };
    /**
     * Lookup54: polkadot_primitives::v5::PersistedValidationData<primitive_types::H256, N>
     **/
    PolkadotPrimitivesV5PersistedValidationData: {
        parentHead: string;
        relayParentNumber: string;
        relayParentStorageRoot: string;
        maxPovSize: string;
    };
    /**
     * Lookup56: sp_trie::storage_proof::StorageProof
     **/
    SpTrieStorageProof: {
        trieNodes: string;
    };
    /**
     * Lookup59: polkadot_core_primitives::InboundDownwardMessage<BlockNumber>
     **/
    PolkadotCorePrimitivesInboundDownwardMessage: {
        sentAt: string;
        msg: string;
    };
    /**
     * Lookup63: polkadot_core_primitives::InboundHrmpMessage<BlockNumber>
     **/
    PolkadotCorePrimitivesInboundHrmpMessage: {
        sentAt: string;
        data: string;
    };
    /**
     * Lookup67: pallet_timestamp::pallet::Call<T>
     **/
    PalletTimestampCall: {
        _enum: {
            set: {
                now: string;
            };
        };
    };
    /**
     * Lookup68: parachain_info::pallet::Call<T>
     **/
    ParachainInfoCall: string;
    /**
     * Lookup69: pallet_balances::pallet::Call<T, I>
     **/
    PalletBalancesCall: {
        _enum: {
            transfer_allow_death: {
                dest: string;
                value: string;
            };
            set_balance_deprecated: {
                who: string;
                newFree: string;
                oldReserved: string;
            };
            force_transfer: {
                source: string;
                dest: string;
                value: string;
            };
            transfer_keep_alive: {
                dest: string;
                value: string;
            };
            transfer_all: {
                dest: string;
                keepAlive: string;
            };
            force_unreserve: {
                who: string;
                amount: string;
            };
            upgrade_accounts: {
                who: string;
            };
            transfer: {
                dest: string;
                value: string;
            };
            force_set_balance: {
                who: string;
                newFree: string;
            };
        };
    };
    /**
     * Lookup76: pallet_bounties::pallet::Call<T, I>
     **/
    PalletBountiesCall: {
        _enum: {
            propose_bounty: {
                value: string;
                description: string;
            };
            approve_bounty: {
                bountyId: string;
            };
            propose_curator: {
                bountyId: string;
                curator: string;
                fee: string;
            };
            unassign_curator: {
                bountyId: string;
            };
            accept_curator: {
                bountyId: string;
            };
            award_bounty: {
                bountyId: string;
                beneficiary: string;
            };
            claim_bounty: {
                bountyId: string;
            };
            close_bounty: {
                bountyId: string;
            };
            extend_bounty_expiry: {
                bountyId: string;
                remark: string;
            };
        };
    };
    /**
     * Lookup78: pallet_treasury::pallet::Call<T, I>
     **/
    PalletTreasuryCall: {
        _enum: {
            propose_spend: {
                value: string;
                beneficiary: string;
            };
            reject_proposal: {
                proposalId: string;
            };
            approve_proposal: {
                proposalId: string;
            };
            spend: {
                amount: string;
                beneficiary: string;
            };
            remove_approval: {
                proposalId: string;
            };
        };
    };
    /**
     * Lookup79: pallet_session::pallet::Call<T>
     **/
    PalletSessionCall: {
        _enum: {
            set_keys: {
                _alias: {
                    keys_: string;
                };
                keys_: string;
                proof: string;
            };
            purge_keys: string;
        };
    };
    /**
     * Lookup80: autograph_parachain_runtime::SessionKeys
     **/
    AutographParachainRuntimeSessionKeys: {
        aura: string;
    };
    /**
     * Lookup81: sp_consensus_aura::sr25519::app_sr25519::Public
     **/
    SpConsensusAuraSr25519AppSr25519Public: string;
    /**
     * Lookup82: sp_core::sr25519::Public
     **/
    SpCoreSr25519Public: string;
    /**
     * Lookup83: parachain_staking::pallet::Call<T>
     **/
    ParachainStakingCall: {
        _enum: {
            force_new_round: string;
            set_inflation: {
                collatorMaxRatePercentage: string;
                collatorAnnualRewardRatePercentage: string;
                delegatorMaxRatePercentage: string;
                delegatorAnnualRewardRatePercentage: string;
            };
            set_max_selected_candidates: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            set_blocks_per_round: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            set_max_candidate_stake: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            force_remove_candidate: {
                collator: string;
            };
            join_candidates: {
                stake: string;
            };
            init_leave_candidates: string;
            execute_leave_candidates: {
                collator: string;
            };
            cancel_leave_candidates: string;
            candidate_stake_more: {
                more: string;
            };
            candidate_stake_less: {
                less: string;
            };
            join_delegators: {
                collator: string;
                amount: string;
            };
            leave_delegators: string;
            delegator_stake_more: {
                more: string;
            };
            delegator_stake_less: {
                less: string;
            };
            unlock_unstaked: {
                target: string;
            };
            claim_rewards: string;
            increment_collator_rewards: string;
            increment_delegator_rewards: string;
            execute_scheduled_reward_change: string;
        };
    };
    /**
     * Lookup84: pallet_conviction_voting::pallet::Call<T, I>
     **/
    PalletConvictionVotingCall: {
        _enum: {
            vote: {
                pollIndex: string;
                vote: string;
            };
            delegate: {
                class: string;
                to: string;
                conviction: string;
                balance: string;
            };
            undelegate: {
                class: string;
            };
            unlock: {
                class: string;
                target: string;
            };
            remove_vote: {
                class: string;
                index: string;
            };
            remove_other_vote: {
                target: string;
                class: string;
                index: string;
            };
        };
    };
    /**
     * Lookup85: pallet_conviction_voting::vote::AccountVote<Balance>
     **/
    PalletConvictionVotingVoteAccountVote: {
        _enum: {
            Standard: {
                vote: string;
                balance: string;
            };
            Split: {
                aye: string;
                nay: string;
            };
            SplitAbstain: {
                aye: string;
                nay: string;
                abstain: string;
            };
        };
    };
    /**
     * Lookup87: pallet_conviction_voting::conviction::Conviction
     **/
    PalletConvictionVotingConviction: {
        _enum: string[];
    };
    /**
     * Lookup89: pallet_ranked_collective::pallet::Call<T, I>
     **/
    PalletRankedCollectiveCall: {
        _enum: {
            add_member: {
                who: string;
            };
            promote_member: {
                who: string;
            };
            demote_member: {
                who: string;
            };
            remove_member: {
                who: string;
                minRank: string;
            };
            vote: {
                poll: string;
                aye: string;
            };
            cleanup_poll: {
                pollIndex: string;
                max: string;
            };
        };
    };
    /**
     * Lookup90: pallet_referenda::pallet::Call<T, I>
     **/
    PalletReferendaCall: {
        _enum: {
            submit: {
                proposalOrigin: string;
                proposal: string;
                enactmentMoment: string;
            };
            place_decision_deposit: {
                index: string;
            };
            refund_decision_deposit: {
                index: string;
            };
            cancel: {
                index: string;
            };
            kill: {
                index: string;
            };
            nudge_referendum: {
                index: string;
            };
            one_fewer_deciding: {
                track: string;
            };
            refund_submission_deposit: {
                index: string;
            };
            set_metadata: {
                index: string;
                maybeHash: string;
            };
        };
    };
    /**
     * Lookup91: autograph_parachain_runtime::OriginCaller
     **/
    AutographParachainRuntimeOriginCaller: {
        _enum: {
            system: string;
            __Unused1: string;
            __Unused2: string;
            __Unused3: string;
            __Unused4: string;
            Void: string;
            __Unused6: string;
            __Unused7: string;
            __Unused8: string;
            __Unused9: string;
            __Unused10: string;
            __Unused11: string;
            __Unused12: string;
            __Unused13: string;
            __Unused14: string;
            __Unused15: string;
            __Unused16: string;
            __Unused17: string;
            __Unused18: string;
            __Unused19: string;
            __Unused20: string;
            __Unused21: string;
            __Unused22: string;
            __Unused23: string;
            __Unused24: string;
            __Unused25: string;
            __Unused26: string;
            __Unused27: string;
            __Unused28: string;
            __Unused29: string;
            __Unused30: string;
            __Unused31: string;
            __Unused32: string;
            __Unused33: string;
            __Unused34: string;
            __Unused35: string;
            __Unused36: string;
            __Unused37: string;
            __Unused38: string;
            __Unused39: string;
            __Unused40: string;
            __Unused41: string;
            __Unused42: string;
            __Unused43: string;
            __Unused44: string;
            __Unused45: string;
            __Unused46: string;
            __Unused47: string;
            __Unused48: string;
            __Unused49: string;
            __Unused50: string;
            __Unused51: string;
            __Unused52: string;
            __Unused53: string;
            __Unused54: string;
            __Unused55: string;
            __Unused56: string;
            __Unused57: string;
            __Unused58: string;
            __Unused59: string;
            __Unused60: string;
            __Unused61: string;
            __Unused62: string;
            Origins: string;
            __Unused64: string;
            __Unused65: string;
            __Unused66: string;
            __Unused67: string;
            __Unused68: string;
            __Unused69: string;
            __Unused70: string;
            __Unused71: string;
            __Unused72: string;
            __Unused73: string;
            __Unused74: string;
            __Unused75: string;
            __Unused76: string;
            __Unused77: string;
            __Unused78: string;
            __Unused79: string;
            __Unused80: string;
            __Unused81: string;
            __Unused82: string;
            __Unused83: string;
            __Unused84: string;
            __Unused85: string;
            __Unused86: string;
            __Unused87: string;
            __Unused88: string;
            __Unused89: string;
            __Unused90: string;
            __Unused91: string;
            __Unused92: string;
            __Unused93: string;
            __Unused94: string;
            __Unused95: string;
            __Unused96: string;
            __Unused97: string;
            __Unused98: string;
            __Unused99: string;
            __Unused100: string;
            __Unused101: string;
            __Unused102: string;
            __Unused103: string;
            __Unused104: string;
            __Unused105: string;
            __Unused106: string;
            __Unused107: string;
            __Unused108: string;
            __Unused109: string;
            __Unused110: string;
            __Unused111: string;
            __Unused112: string;
            __Unused113: string;
            __Unused114: string;
            __Unused115: string;
            __Unused116: string;
            __Unused117: string;
            __Unused118: string;
            __Unused119: string;
            __Unused120: string;
            CumulusXcm: string;
            __Unused122: string;
            PolkadotXcm: string;
            __Unused124: string;
            __Unused125: string;
            __Unused126: string;
            __Unused127: string;
            __Unused128: string;
            __Unused129: string;
            __Unused130: string;
            __Unused131: string;
            __Unused132: string;
            __Unused133: string;
            __Unused134: string;
            __Unused135: string;
            __Unused136: string;
            __Unused137: string;
            __Unused138: string;
            __Unused139: string;
            Ethereum: string;
        };
    };
    /**
     * Lookup92: frame_support::dispatch::RawOrigin<sp_core::crypto::AccountId32>
     **/
    FrameSupportDispatchRawOrigin: {
        _enum: {
            Root: string;
            Signed: string;
            None: string;
        };
    };
    /**
     * Lookup93: autograph_parachain_runtime::governance::origins::pallet_custom_origins::Origin
     **/
    AutographParachainRuntimeGovernanceOriginsPalletCustomOriginsOrigin: {
        _enum: string[];
    };
    /**
     * Lookup94: cumulus_pallet_xcm::pallet::Origin
     **/
    CumulusPalletXcmOrigin: {
        _enum: {
            Relay: string;
            SiblingParachain: string;
        };
    };
    /**
     * Lookup95: pallet_xcm::pallet::Origin
     **/
    PalletXcmOrigin: {
        _enum: {
            Xcm: string;
            Response: string;
        };
    };
    /**
     * Lookup96: staging_xcm::v3::multilocation::MultiLocation
     **/
    StagingXcmV3MultiLocation: {
        parents: string;
        interior: string;
    };
    /**
     * Lookup97: staging_xcm::v3::junctions::Junctions
     **/
    StagingXcmV3Junctions: {
        _enum: {
            Here: string;
            X1: string;
            X2: string;
            X3: string;
            X4: string;
            X5: string;
            X6: string;
            X7: string;
            X8: string;
        };
    };
    /**
     * Lookup98: staging_xcm::v3::junction::Junction
     **/
    StagingXcmV3Junction: {
        _enum: {
            Parachain: string;
            AccountId32: {
                network: string;
                id: string;
            };
            AccountIndex64: {
                network: string;
                index: string;
            };
            AccountKey20: {
                network: string;
                key: string;
            };
            PalletInstance: string;
            GeneralIndex: string;
            GeneralKey: {
                length: string;
                data: string;
            };
            OnlyChild: string;
            Plurality: {
                id: string;
                part: string;
            };
            GlobalConsensus: string;
        };
    };
    /**
     * Lookup100: staging_xcm::v3::junction::NetworkId
     **/
    StagingXcmV3JunctionNetworkId: {
        _enum: {
            ByGenesis: string;
            ByFork: {
                blockNumber: string;
                blockHash: string;
            };
            Polkadot: string;
            Kusama: string;
            Westend: string;
            Rococo: string;
            Wococo: string;
            Ethereum: {
                chainId: string;
            };
            BitcoinCore: string;
            BitcoinCash: string;
        };
    };
    /**
     * Lookup101: staging_xcm::v3::junction::BodyId
     **/
    StagingXcmV3JunctionBodyId: {
        _enum: {
            Unit: string;
            Moniker: string;
            Index: string;
            Executive: string;
            Technical: string;
            Legislative: string;
            Judicial: string;
            Defense: string;
            Administration: string;
            Treasury: string;
        };
    };
    /**
     * Lookup102: staging_xcm::v3::junction::BodyPart
     **/
    StagingXcmV3JunctionBodyPart: {
        _enum: {
            Voice: string;
            Members: {
                count: string;
            };
            Fraction: {
                nom: string;
                denom: string;
            };
            AtLeastProportion: {
                nom: string;
                denom: string;
            };
            MoreThanProportion: {
                nom: string;
                denom: string;
            };
        };
    };
    /**
     * Lookup103: pallet_ethereum::RawOrigin
     **/
    PalletEthereumRawOrigin: {
        _enum: {
            EthereumTransaction: string;
        };
    };
    /**
     * Lookup105: sp_core::Void
     **/
    SpCoreVoid: string;
    /**
     * Lookup106: frame_support::traits::schedule::DispatchTime<BlockNumber>
     **/
    FrameSupportScheduleDispatchTime: {
        _enum: {
            At: string;
            After: string;
        };
    };
    /**
     * Lookup109: pallet_whitelist::pallet::Call<T>
     **/
    PalletWhitelistCall: {
        _enum: {
            whitelist_call: {
                callHash: string;
            };
            remove_whitelisted_call: {
                callHash: string;
            };
            dispatch_whitelisted_call: {
                callHash: string;
                callEncodedLen: string;
                callWeightWitness: string;
            };
            dispatch_whitelisted_call_with_preimage: {
                call: string;
            };
        };
    };
    /**
     * Lookup110: pallet_multisig::pallet::Call<T>
     **/
    PalletMultisigCall: {
        _enum: {
            as_multi_threshold_1: {
                otherSignatories: string;
                call: string;
            };
            as_multi: {
                threshold: string;
                otherSignatories: string;
                maybeTimepoint: string;
                call: string;
                maxWeight: string;
            };
            approve_as_multi: {
                threshold: string;
                otherSignatories: string;
                maybeTimepoint: string;
                callHash: string;
                maxWeight: string;
            };
            cancel_as_multi: {
                threshold: string;
                otherSignatories: string;
                timepoint: string;
                callHash: string;
            };
        };
    };
    /**
     * Lookup112: pallet_multisig::Timepoint<BlockNumber>
     **/
    PalletMultisigTimepoint: {
        height: string;
        index: string;
    };
    /**
     * Lookup113: pallet_sudo::pallet::Call<T>
     **/
    PalletSudoCall: {
        _enum: {
            sudo: {
                call: string;
            };
            sudo_unchecked_weight: {
                call: string;
                weight: string;
            };
            set_key: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            sudo_as: {
                who: string;
                call: string;
            };
        };
    };
    /**
     * Lookup114: pallet_tx_pause::pallet::Call<T>
     **/
    PalletTxPauseCall: {
        _enum: {
            pause: {
                fullName: string;
            };
            unpause: {
                ident: string;
            };
        };
    };
    /**
     * Lookup117: pallet_scheduler::pallet::Call<T>
     **/
    PalletSchedulerCall: {
        _enum: {
            schedule: {
                when: string;
                maybePeriodic: string;
                priority: string;
                call: string;
            };
            cancel: {
                when: string;
                index: string;
            };
            schedule_named: {
                id: string;
                when: string;
                maybePeriodic: string;
                priority: string;
                call: string;
            };
            cancel_named: {
                id: string;
            };
            schedule_after: {
                after: string;
                maybePeriodic: string;
                priority: string;
                call: string;
            };
            schedule_named_after: {
                id: string;
                after: string;
                maybePeriodic: string;
                priority: string;
                call: string;
            };
        };
    };
    /**
     * Lookup120: pallet_preimage::pallet::Call<T>
     **/
    PalletPreimageCall: {
        _enum: {
            note_preimage: {
                bytes: string;
            };
            unnote_preimage: {
                _alias: {
                    hash_: string;
                };
                hash_: string;
            };
            request_preimage: {
                _alias: {
                    hash_: string;
                };
                hash_: string;
            };
            unrequest_preimage: {
                _alias: {
                    hash_: string;
                };
                hash_: string;
            };
        };
    };
    /**
     * Lookup122: pallet_whitelist::AddInvestorData<sp_core::crypto::AccountId32>
     **/
    PalletWhitelistAddInvestorData: {
        key: string;
        account: string;
        isActive: string;
    };
    /**
     * Lookup123: pallet_access::pallet::Call<T>
     **/
    PalletAccessCall: {
        _enum: {
            grant_role: {
                account: string;
                role: string;
            };
            take_role: {
                account: string;
                role: string;
            };
        };
    };
    /**
     * Lookup124: autograph_parachain_runtime::Role
     **/
    AutographParachainRuntimeRole: {
        _enum: string[];
    };
    /**
     * Lookup125: pallet_refungible::pallet::Call<T>
     **/
    PalletRefungibleCall: {
        _enum: {
            init_collection: {
                data: string;
            };
            destroy_collection: {
                collectionId: string;
            };
            set_collection_property: {
                collectionId: string;
                property: string;
            };
            delete_collection_property: {
                collectionId: string;
                propertyKey: string;
            };
            set_collection_properties: {
                collectionId: string;
                properties: string;
            };
            delete_collection_properties: {
                collectionId: string;
                propertyKeys: string;
            };
            set_property_permission: {
                collectionId: string;
                propertyPermission: string;
            };
            create_item: {
                collectionId: string;
                data: string;
            };
            create_multiple_items: {
                collectionId: string;
                data: string;
            };
            set_token_property: {
                collectionId: string;
                tokenId: string;
                property: string;
            };
            set_token_properties: {
                collectionId: string;
                tokenId: string;
                properties: string;
            };
            delete_token_property: {
                collectionId: string;
                tokenId: string;
                propertyKey: string;
            };
            delete_token_properties: {
                collectionId: string;
                tokenId: string;
                propertiesKeys: string;
            };
            transfer: {
                collectionId: string;
                tokenId: string;
                to: string;
                amount: string;
            };
            transfer_from: {
                collectionId: string;
                tokenId: string;
                from: string;
                to: string;
                amount: string;
            };
            set_allowance: {
                collectionId: string;
                tokenId: string;
                spender: string;
                amount: string;
            };
            mint_additional_pieces: {
                collectionId: string;
                tokenId: string;
                to: string;
                amount: string;
            };
            burn: {
                collectionId: string;
                tokenId: string;
                amount: string;
            };
            burn_from: {
                collectionId: string;
                tokenId: string;
                from: string;
                amount: string;
            };
            repartition: {
                collectionId: string;
                tokenId: string;
                amount: string;
            };
        };
    };
    /**
     * Lookup126: collection_primitives::CreateRftCollectionData
     **/
    CollectionPrimitivesCreateRftCollectionData: {
        name: string;
        description: string;
        tokenPrefix: string;
        limits: string;
        propertyPermissions: string;
        properties: string;
    };
    /**
     * Lookup132: collection_primitives::CollectionLimits
     **/
    CollectionPrimitivesCollectionLimits: {
        accountTokenOwnershipLimit: string;
        collectionTokenLimit: string;
        ownerCanDestroy: string;
    };
    /**
     * Lookup136: collection_primitives::properties::PropertyKeyPermission
     **/
    CollectionPrimitivesPropertiesPropertyKeyPermission: {
        key: string;
        permission: string;
    };
    /**
     * Lookup137: collection_primitives::properties::PropertyPermission
     **/
    CollectionPrimitivesPropertiesPropertyPermission: {
        mutable: string;
    };
    /**
     * Lookup140: collection_primitives::properties::Property
     **/
    CollectionPrimitivesPropertiesProperty: {
        key: string;
        value: string;
    };
    /**
     * Lookup145: pallet_refungible::CreateItemData<sp_core::crypto::AccountId32>
     **/
    PalletRefungibleCreateItemData: {
        balances: string;
        properties: string;
    };
    /**
     * Lookup150: cumulus_pallet_xcmp_queue::pallet::Call<T>
     **/
    CumulusPalletXcmpQueueCall: {
        _enum: {
            service_overweight: {
                index: string;
                weightLimit: string;
            };
            suspend_xcm_execution: string;
            resume_xcm_execution: string;
            update_suspend_threshold: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            update_drop_threshold: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            update_resume_threshold: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            update_threshold_weight: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            update_weight_restrict_decay: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            update_xcmp_max_individual_weight: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
        };
    };
    /**
     * Lookup151: cumulus_pallet_xcm::pallet::Call<T>
     **/
    CumulusPalletXcmCall: string;
    /**
     * Lookup152: cumulus_pallet_dmp_queue::pallet::Call<T>
     **/
    CumulusPalletDmpQueueCall: {
        _enum: {
            service_overweight: {
                index: string;
                weightLimit: string;
            };
        };
    };
    /**
     * Lookup153: pallet_xcm::pallet::Call<T>
     **/
    PalletXcmCall: {
        _enum: {
            send: {
                dest: string;
                message: string;
            };
            teleport_assets: {
                dest: string;
                beneficiary: string;
                assets: string;
                feeAssetItem: string;
            };
            reserve_transfer_assets: {
                dest: string;
                beneficiary: string;
                assets: string;
                feeAssetItem: string;
            };
            execute: {
                message: string;
                maxWeight: string;
            };
            force_xcm_version: {
                location: string;
                version: string;
            };
            force_default_xcm_version: {
                maybeXcmVersion: string;
            };
            force_subscribe_version_notify: {
                location: string;
            };
            force_unsubscribe_version_notify: {
                location: string;
            };
            limited_reserve_transfer_assets: {
                dest: string;
                beneficiary: string;
                assets: string;
                feeAssetItem: string;
                weightLimit: string;
            };
            limited_teleport_assets: {
                dest: string;
                beneficiary: string;
                assets: string;
                feeAssetItem: string;
                weightLimit: string;
            };
            force_suspension: {
                suspended: string;
            };
        };
    };
    /**
     * Lookup154: staging_xcm::VersionedMultiLocation
     **/
    StagingXcmVersionedMultiLocation: {
        _enum: {
            __Unused0: string;
            V2: string;
            __Unused2: string;
            V3: string;
        };
    };
    /**
     * Lookup155: staging_xcm::v2::multilocation::MultiLocation
     **/
    StagingXcmV2MultiLocation: {
        parents: string;
        interior: string;
    };
    /**
     * Lookup156: staging_xcm::v2::multilocation::Junctions
     **/
    StagingXcmV2MultilocationJunctions: {
        _enum: {
            Here: string;
            X1: string;
            X2: string;
            X3: string;
            X4: string;
            X5: string;
            X6: string;
            X7: string;
            X8: string;
        };
    };
    /**
     * Lookup157: staging_xcm::v2::junction::Junction
     **/
    StagingXcmV2Junction: {
        _enum: {
            Parachain: string;
            AccountId32: {
                network: string;
                id: string;
            };
            AccountIndex64: {
                network: string;
                index: string;
            };
            AccountKey20: {
                network: string;
                key: string;
            };
            PalletInstance: string;
            GeneralIndex: string;
            GeneralKey: string;
            OnlyChild: string;
            Plurality: {
                id: string;
                part: string;
            };
        };
    };
    /**
     * Lookup158: staging_xcm::v2::NetworkId
     **/
    StagingXcmV2NetworkId: {
        _enum: {
            Any: string;
            Named: string;
            Polkadot: string;
            Kusama: string;
        };
    };
    /**
     * Lookup160: staging_xcm::v2::BodyId
     **/
    StagingXcmV2BodyId: {
        _enum: {
            Unit: string;
            Named: string;
            Index: string;
            Executive: string;
            Technical: string;
            Legislative: string;
            Judicial: string;
            Defense: string;
            Administration: string;
            Treasury: string;
        };
    };
    /**
     * Lookup161: staging_xcm::v2::BodyPart
     **/
    StagingXcmV2BodyPart: {
        _enum: {
            Voice: string;
            Members: {
                count: string;
            };
            Fraction: {
                nom: string;
                denom: string;
            };
            AtLeastProportion: {
                nom: string;
                denom: string;
            };
            MoreThanProportion: {
                nom: string;
                denom: string;
            };
        };
    };
    /**
     * Lookup162: staging_xcm::VersionedXcm<RuntimeCall>
     **/
    StagingXcmVersionedXcm: {
        _enum: {
            __Unused0: string;
            __Unused1: string;
            V2: string;
            V3: string;
        };
    };
    /**
     * Lookup163: staging_xcm::v2::Xcm<RuntimeCall>
     **/
    StagingXcmV2Xcm: string;
    /**
     * Lookup165: staging_xcm::v2::Instruction<RuntimeCall>
     **/
    StagingXcmV2Instruction: {
        _enum: {
            WithdrawAsset: string;
            ReserveAssetDeposited: string;
            ReceiveTeleportedAsset: string;
            QueryResponse: {
                queryId: string;
                response: string;
                maxWeight: string;
            };
            TransferAsset: {
                assets: string;
                beneficiary: string;
            };
            TransferReserveAsset: {
                assets: string;
                dest: string;
                xcm: string;
            };
            Transact: {
                originType: string;
                requireWeightAtMost: string;
                call: string;
            };
            HrmpNewChannelOpenRequest: {
                sender: string;
                maxMessageSize: string;
                maxCapacity: string;
            };
            HrmpChannelAccepted: {
                recipient: string;
            };
            HrmpChannelClosing: {
                initiator: string;
                sender: string;
                recipient: string;
            };
            ClearOrigin: string;
            DescendOrigin: string;
            ReportError: {
                queryId: string;
                dest: string;
                maxResponseWeight: string;
            };
            DepositAsset: {
                assets: string;
                maxAssets: string;
                beneficiary: string;
            };
            DepositReserveAsset: {
                assets: string;
                maxAssets: string;
                dest: string;
                xcm: string;
            };
            ExchangeAsset: {
                give: string;
                receive: string;
            };
            InitiateReserveWithdraw: {
                assets: string;
                reserve: string;
                xcm: string;
            };
            InitiateTeleport: {
                assets: string;
                dest: string;
                xcm: string;
            };
            QueryHolding: {
                queryId: string;
                dest: string;
                assets: string;
                maxResponseWeight: string;
            };
            BuyExecution: {
                fees: string;
                weightLimit: string;
            };
            RefundSurplus: string;
            SetErrorHandler: string;
            SetAppendix: string;
            ClearError: string;
            ClaimAsset: {
                assets: string;
                ticket: string;
            };
            Trap: string;
            SubscribeVersion: {
                queryId: string;
                maxResponseWeight: string;
            };
            UnsubscribeVersion: string;
        };
    };
    /**
     * Lookup166: staging_xcm::v2::multiasset::MultiAssets
     **/
    StagingXcmV2MultiassetMultiAssets: string;
    /**
     * Lookup168: staging_xcm::v2::multiasset::MultiAsset
     **/
    StagingXcmV2MultiAsset: {
        id: string;
        fun: string;
    };
    /**
     * Lookup169: staging_xcm::v2::multiasset::AssetId
     **/
    StagingXcmV2MultiassetAssetId: {
        _enum: {
            Concrete: string;
            Abstract: string;
        };
    };
    /**
     * Lookup170: staging_xcm::v2::multiasset::Fungibility
     **/
    StagingXcmV2MultiassetFungibility: {
        _enum: {
            Fungible: string;
            NonFungible: string;
        };
    };
    /**
     * Lookup171: staging_xcm::v2::multiasset::AssetInstance
     **/
    StagingXcmV2MultiassetAssetInstance: {
        _enum: {
            Undefined: string;
            Index: string;
            Array4: string;
            Array8: string;
            Array16: string;
            Array32: string;
            Blob: string;
        };
    };
    /**
     * Lookup174: staging_xcm::v2::Response
     **/
    StagingXcmV2Response: {
        _enum: {
            Null: string;
            Assets: string;
            ExecutionResult: string;
            Version: string;
        };
    };
    /**
     * Lookup177: staging_xcm::v2::traits::Error
     **/
    StagingXcmV2TraitsError: {
        _enum: {
            Overflow: string;
            Unimplemented: string;
            UntrustedReserveLocation: string;
            UntrustedTeleportLocation: string;
            MultiLocationFull: string;
            MultiLocationNotInvertible: string;
            BadOrigin: string;
            InvalidLocation: string;
            AssetNotFound: string;
            FailedToTransactAsset: string;
            NotWithdrawable: string;
            LocationCannotHold: string;
            ExceedsMaxMessageSize: string;
            DestinationUnsupported: string;
            Transport: string;
            Unroutable: string;
            UnknownClaim: string;
            FailedToDecode: string;
            MaxWeightInvalid: string;
            NotHoldingFees: string;
            TooExpensive: string;
            Trap: string;
            UnhandledXcmVersion: string;
            WeightLimitReached: string;
            Barrier: string;
            WeightNotComputable: string;
        };
    };
    /**
     * Lookup178: staging_xcm::v2::OriginKind
     **/
    StagingXcmV2OriginKind: {
        _enum: string[];
    };
    /**
     * Lookup179: staging_xcm::double_encoded::DoubleEncoded<T>
     **/
    StagingXcmDoubleEncoded: {
        encoded: string;
    };
    /**
     * Lookup180: staging_xcm::v2::multiasset::MultiAssetFilter
     **/
    StagingXcmV2MultiassetMultiAssetFilter: {
        _enum: {
            Definite: string;
            Wild: string;
        };
    };
    /**
     * Lookup181: staging_xcm::v2::multiasset::WildMultiAsset
     **/
    StagingXcmV2MultiassetWildMultiAsset: {
        _enum: {
            All: string;
            AllOf: {
                id: string;
                fun: string;
            };
        };
    };
    /**
     * Lookup182: staging_xcm::v2::multiasset::WildFungibility
     **/
    StagingXcmV2MultiassetWildFungibility: {
        _enum: string[];
    };
    /**
     * Lookup183: staging_xcm::v2::WeightLimit
     **/
    StagingXcmV2WeightLimit: {
        _enum: {
            Unlimited: string;
            Limited: string;
        };
    };
    /**
     * Lookup184: staging_xcm::v3::Xcm<Call>
     **/
    StagingXcmV3Xcm: string;
    /**
     * Lookup186: staging_xcm::v3::Instruction<Call>
     **/
    StagingXcmV3Instruction: {
        _enum: {
            WithdrawAsset: string;
            ReserveAssetDeposited: string;
            ReceiveTeleportedAsset: string;
            QueryResponse: {
                queryId: string;
                response: string;
                maxWeight: string;
                querier: string;
            };
            TransferAsset: {
                assets: string;
                beneficiary: string;
            };
            TransferReserveAsset: {
                assets: string;
                dest: string;
                xcm: string;
            };
            Transact: {
                originKind: string;
                requireWeightAtMost: string;
                call: string;
            };
            HrmpNewChannelOpenRequest: {
                sender: string;
                maxMessageSize: string;
                maxCapacity: string;
            };
            HrmpChannelAccepted: {
                recipient: string;
            };
            HrmpChannelClosing: {
                initiator: string;
                sender: string;
                recipient: string;
            };
            ClearOrigin: string;
            DescendOrigin: string;
            ReportError: string;
            DepositAsset: {
                assets: string;
                beneficiary: string;
            };
            DepositReserveAsset: {
                assets: string;
                dest: string;
                xcm: string;
            };
            ExchangeAsset: {
                give: string;
                want: string;
                maximal: string;
            };
            InitiateReserveWithdraw: {
                assets: string;
                reserve: string;
                xcm: string;
            };
            InitiateTeleport: {
                assets: string;
                dest: string;
                xcm: string;
            };
            ReportHolding: {
                responseInfo: string;
                assets: string;
            };
            BuyExecution: {
                fees: string;
                weightLimit: string;
            };
            RefundSurplus: string;
            SetErrorHandler: string;
            SetAppendix: string;
            ClearError: string;
            ClaimAsset: {
                assets: string;
                ticket: string;
            };
            Trap: string;
            SubscribeVersion: {
                queryId: string;
                maxResponseWeight: string;
            };
            UnsubscribeVersion: string;
            BurnAsset: string;
            ExpectAsset: string;
            ExpectOrigin: string;
            ExpectError: string;
            ExpectTransactStatus: string;
            QueryPallet: {
                moduleName: string;
                responseInfo: string;
            };
            ExpectPallet: {
                index: string;
                name: string;
                moduleName: string;
                crateMajor: string;
                minCrateMinor: string;
            };
            ReportTransactStatus: string;
            ClearTransactStatus: string;
            UniversalOrigin: string;
            ExportMessage: {
                network: string;
                destination: string;
                xcm: string;
            };
            LockAsset: {
                asset: string;
                unlocker: string;
            };
            UnlockAsset: {
                asset: string;
                target: string;
            };
            NoteUnlockable: {
                asset: string;
                owner: string;
            };
            RequestUnlock: {
                asset: string;
                locker: string;
            };
            SetFeesMode: {
                jitWithdraw: string;
            };
            SetTopic: string;
            ClearTopic: string;
            AliasOrigin: string;
            UnpaidExecution: {
                weightLimit: string;
                checkOrigin: string;
            };
        };
    };
    /**
     * Lookup187: staging_xcm::v3::multiasset::MultiAssets
     **/
    StagingXcmV3MultiassetMultiAssets: string;
    /**
     * Lookup189: staging_xcm::v3::multiasset::MultiAsset
     **/
    StagingXcmV3MultiAsset: {
        id: string;
        fun: string;
    };
    /**
     * Lookup190: staging_xcm::v3::multiasset::AssetId
     **/
    StagingXcmV3MultiassetAssetId: {
        _enum: {
            Concrete: string;
            Abstract: string;
        };
    };
    /**
     * Lookup191: staging_xcm::v3::multiasset::Fungibility
     **/
    StagingXcmV3MultiassetFungibility: {
        _enum: {
            Fungible: string;
            NonFungible: string;
        };
    };
    /**
     * Lookup192: staging_xcm::v3::multiasset::AssetInstance
     **/
    StagingXcmV3MultiassetAssetInstance: {
        _enum: {
            Undefined: string;
            Index: string;
            Array4: string;
            Array8: string;
            Array16: string;
            Array32: string;
        };
    };
    /**
     * Lookup193: staging_xcm::v3::Response
     **/
    StagingXcmV3Response: {
        _enum: {
            Null: string;
            Assets: string;
            ExecutionResult: string;
            Version: string;
            PalletsInfo: string;
            DispatchResult: string;
        };
    };
    /**
     * Lookup196: staging_xcm::v3::traits::Error
     **/
    StagingXcmV3TraitsError: {
        _enum: {
            Overflow: string;
            Unimplemented: string;
            UntrustedReserveLocation: string;
            UntrustedTeleportLocation: string;
            LocationFull: string;
            LocationNotInvertible: string;
            BadOrigin: string;
            InvalidLocation: string;
            AssetNotFound: string;
            FailedToTransactAsset: string;
            NotWithdrawable: string;
            LocationCannotHold: string;
            ExceedsMaxMessageSize: string;
            DestinationUnsupported: string;
            Transport: string;
            Unroutable: string;
            UnknownClaim: string;
            FailedToDecode: string;
            MaxWeightInvalid: string;
            NotHoldingFees: string;
            TooExpensive: string;
            Trap: string;
            ExpectationFalse: string;
            PalletNotFound: string;
            NameMismatch: string;
            VersionIncompatible: string;
            HoldingWouldOverflow: string;
            ExportError: string;
            ReanchorFailed: string;
            NoDeal: string;
            FeesNotMet: string;
            LockError: string;
            NoPermission: string;
            Unanchored: string;
            NotDepositable: string;
            UnhandledXcmVersion: string;
            WeightLimitReached: string;
            Barrier: string;
            WeightNotComputable: string;
            ExceedsStackLimit: string;
        };
    };
    /**
     * Lookup198: staging_xcm::v3::PalletInfo
     **/
    StagingXcmV3PalletInfo: {
        index: string;
        name: string;
        moduleName: string;
        major: string;
        minor: string;
        patch: string;
    };
    /**
     * Lookup201: staging_xcm::v3::MaybeErrorCode
     **/
    StagingXcmV3MaybeErrorCode: {
        _enum: {
            Success: string;
            Error: string;
            TruncatedError: string;
        };
    };
    /**
     * Lookup204: staging_xcm::v3::QueryResponseInfo
     **/
    StagingXcmV3QueryResponseInfo: {
        destination: string;
        queryId: string;
        maxWeight: string;
    };
    /**
     * Lookup205: staging_xcm::v3::multiasset::MultiAssetFilter
     **/
    StagingXcmV3MultiassetMultiAssetFilter: {
        _enum: {
            Definite: string;
            Wild: string;
        };
    };
    /**
     * Lookup206: staging_xcm::v3::multiasset::WildMultiAsset
     **/
    StagingXcmV3MultiassetWildMultiAsset: {
        _enum: {
            All: string;
            AllOf: {
                id: string;
                fun: string;
            };
            AllCounted: string;
            AllOfCounted: {
                id: string;
                fun: string;
                count: string;
            };
        };
    };
    /**
     * Lookup207: staging_xcm::v3::multiasset::WildFungibility
     **/
    StagingXcmV3MultiassetWildFungibility: {
        _enum: string[];
    };
    /**
     * Lookup208: staging_xcm::v3::WeightLimit
     **/
    StagingXcmV3WeightLimit: {
        _enum: {
            Unlimited: string;
            Limited: string;
        };
    };
    /**
     * Lookup209: staging_xcm::VersionedMultiAssets
     **/
    StagingXcmVersionedMultiAssets: {
        _enum: {
            __Unused0: string;
            V2: string;
            __Unused2: string;
            V3: string;
        };
    };
    /**
     * Lookup218: pallet_ethereum::pallet::Call<T>
     **/
    PalletEthereumCall: {
        _enum: {
            transact: {
                transaction: string;
            };
        };
    };
    /**
     * Lookup219: ethereum::transaction::TransactionV2
     **/
    EthereumTransactionTransactionV2: {
        _enum: {
            Legacy: string;
            EIP2930: string;
            EIP1559: string;
        };
    };
    /**
     * Lookup220: ethereum::transaction::LegacyTransaction
     **/
    EthereumTransactionLegacyTransaction: {
        nonce: string;
        gasPrice: string;
        gasLimit: string;
        action: string;
        value: string;
        input: string;
        signature: string;
    };
    /**
     * Lookup223: ethereum::transaction::TransactionAction
     **/
    EthereumTransactionTransactionAction: {
        _enum: {
            Call: string;
            Create: string;
        };
    };
    /**
     * Lookup224: ethereum::transaction::TransactionSignature
     **/
    EthereumTransactionTransactionSignature: {
        v: string;
        r: string;
        s: string;
    };
    /**
     * Lookup226: ethereum::transaction::EIP2930Transaction
     **/
    EthereumTransactionEip2930Transaction: {
        chainId: string;
        nonce: string;
        gasPrice: string;
        gasLimit: string;
        action: string;
        value: string;
        input: string;
        accessList: string;
        oddYParity: string;
        r: string;
        s: string;
    };
    /**
     * Lookup228: ethereum::transaction::AccessListItem
     **/
    EthereumTransactionAccessListItem: {
        address: string;
        storageKeys: string;
    };
    /**
     * Lookup230: ethereum::transaction::EIP1559Transaction
     **/
    EthereumTransactionEip1559Transaction: {
        chainId: string;
        nonce: string;
        maxPriorityFeePerGas: string;
        maxFeePerGas: string;
        gasLimit: string;
        action: string;
        value: string;
        input: string;
        accessList: string;
        oddYParity: string;
        r: string;
        s: string;
    };
    /**
     * Lookup231: pallet_evm::pallet::Call<T>
     **/
    PalletEvmCall: {
        _enum: {
            withdraw: {
                address: string;
                value: string;
            };
            call: {
                source: string;
                target: string;
                input: string;
                value: string;
                gasLimit: string;
                maxFeePerGas: string;
                maxPriorityFeePerGas: string;
                nonce: string;
                accessList: string;
            };
            create: {
                source: string;
                init: string;
                value: string;
                gasLimit: string;
                maxFeePerGas: string;
                maxPriorityFeePerGas: string;
                nonce: string;
                accessList: string;
            };
            create2: {
                source: string;
                init: string;
                salt: string;
                value: string;
                gasLimit: string;
                maxFeePerGas: string;
                maxPriorityFeePerGas: string;
                nonce: string;
                accessList: string;
            };
        };
    };
    /**
     * Lookup235: pallet_base_fee::pallet::Call<T>
     **/
    PalletBaseFeeCall: {
        _enum: {
            set_base_fee_per_gas: {
                fee: string;
            };
            set_elasticity: {
                elasticity: string;
            };
        };
    };
    /**
     * Lookup239: pallet_conviction_voting::types::Tally<Votes, Total>
     **/
    PalletConvictionVotingTally: {
        ayes: string;
        nays: string;
        support: string;
    };
    /**
     * Lookup240: pallet_whitelist::pallet::Event<T>
     **/
    PalletWhitelistEvent: {
        _enum: {
            CallWhitelisted: {
                callHash: string;
            };
            WhitelistedCallRemoved: {
                callHash: string;
            };
            WhitelistedCallDispatched: {
                callHash: string;
                result: string;
            };
        };
    };
    /**
     * Lookup242: frame_support::dispatch::PostDispatchInfo
     **/
    FrameSupportDispatchPostDispatchInfo: {
        actualWeight: string;
        paysFee: string;
    };
    /**
     * Lookup244: sp_runtime::DispatchErrorWithPostInfo<frame_support::dispatch::PostDispatchInfo>
     **/
    SpRuntimeDispatchErrorWithPostInfo: {
        postInfo: string;
        error: string;
    };
    /**
     * Lookup245: pallet_multisig::pallet::Event<T>
     **/
    PalletMultisigEvent: {
        _enum: {
            NewMultisig: {
                approving: string;
                multisig: string;
                callHash: string;
            };
            MultisigApproval: {
                approving: string;
                timepoint: string;
                multisig: string;
                callHash: string;
            };
            MultisigExecuted: {
                approving: string;
                timepoint: string;
                multisig: string;
                callHash: string;
                result: string;
            };
            MultisigCancelled: {
                cancelling: string;
                timepoint: string;
                multisig: string;
                callHash: string;
            };
        };
    };
    /**
     * Lookup247: pallet_sudo::pallet::Event<T>
     **/
    PalletSudoEvent: {
        _enum: {
            Sudid: {
                sudoResult: string;
            };
            KeyChanged: {
                oldSudoer: string;
            };
            SudoAsDone: {
                sudoResult: string;
            };
        };
    };
    /**
     * Lookup249: pallet_tx_pause::pallet::Event<T>
     **/
    PalletTxPauseEvent: {
        _enum: {
            CallPaused: {
                fullName: string;
            };
            CallUnpaused: {
                fullName: string;
            };
        };
    };
    /**
     * Lookup250: pallet_scheduler::pallet::Event<T>
     **/
    PalletSchedulerEvent: {
        _enum: {
            Scheduled: {
                when: string;
                index: string;
            };
            Canceled: {
                when: string;
                index: string;
            };
            Dispatched: {
                task: string;
                id: string;
                result: string;
            };
            CallUnavailable: {
                task: string;
                id: string;
            };
            PeriodicFailed: {
                task: string;
                id: string;
            };
            PermanentlyOverweight: {
                task: string;
                id: string;
            };
        };
    };
    /**
     * Lookup251: pallet_preimage::pallet::Event<T>
     **/
    PalletPreimageEvent: {
        _enum: {
            Noted: {
                _alias: {
                    hash_: string;
                };
                hash_: string;
            };
            Requested: {
                _alias: {
                    hash_: string;
                };
                hash_: string;
            };
            Cleared: {
                _alias: {
                    hash_: string;
                };
                hash_: string;
            };
        };
    };
    /**
     * Lookup253: pallet_access::pallet::Event<T>
     **/
    PalletAccessEvent: {
        _enum: {
            RoleGranted: {
                account: string;
                role: string;
            };
            RoleTaken: {
                account: string;
                role: string;
            };
        };
    };
    /**
     * Lookup254: pallet_common::pallet::Event<T>
     **/
    PalletCommonEvent: {
        _enum: {
            CollectionCreated: string;
            CollectionDestroyed: string;
            ItemCreated: string;
            ItemDestroyed: string;
            Transfer: string;
            Approved: string;
            CollectionPropertySet: string;
            CollectionPropertyDeleted: string;
            TokenPropertySet: string;
            TokenPropertyDeleted: string;
            PropertyPermissionSet: string;
        };
    };
    /**
     * Lookup255: cumulus_pallet_xcmp_queue::pallet::Event<T>
     **/
    CumulusPalletXcmpQueueEvent: {
        _enum: {
            Success: {
                messageHash: string;
                messageId: string;
                weight: string;
            };
            Fail: {
                messageHash: string;
                messageId: string;
                error: string;
                weight: string;
            };
            BadVersion: {
                messageHash: string;
            };
            BadFormat: {
                messageHash: string;
            };
            XcmpMessageSent: {
                messageHash: string;
            };
            OverweightEnqueued: {
                sender: string;
                sentAt: string;
                index: string;
                required: string;
            };
            OverweightServiced: {
                index: string;
                used: string;
            };
        };
    };
    /**
     * Lookup256: cumulus_pallet_xcm::pallet::Event<T>
     **/
    CumulusPalletXcmEvent: {
        _enum: {
            InvalidFormat: string;
            UnsupportedVersion: string;
            ExecutedDownward: string;
        };
    };
    /**
     * Lookup257: staging_xcm::v3::traits::Outcome
     **/
    StagingXcmV3TraitsOutcome: {
        _enum: {
            Complete: string;
            Incomplete: string;
            Error: string;
        };
    };
    /**
     * Lookup258: cumulus_pallet_dmp_queue::pallet::Event<T>
     **/
    CumulusPalletDmpQueueEvent: {
        _enum: {
            InvalidFormat: {
                messageHash: string;
            };
            UnsupportedVersion: {
                messageHash: string;
            };
            ExecutedDownward: {
                messageHash: string;
                messageId: string;
                outcome: string;
            };
            WeightExhausted: {
                messageHash: string;
                messageId: string;
                remainingWeight: string;
                requiredWeight: string;
            };
            OverweightEnqueued: {
                messageHash: string;
                messageId: string;
                overweightIndex: string;
                requiredWeight: string;
            };
            OverweightServiced: {
                overweightIndex: string;
                weightUsed: string;
            };
            MaxMessagesExhausted: {
                messageHash: string;
            };
        };
    };
    /**
     * Lookup259: pallet_xcm::pallet::Event<T>
     **/
    PalletXcmEvent: {
        _enum: {
            Attempted: {
                outcome: string;
            };
            Sent: {
                origin: string;
                destination: string;
                message: string;
                messageId: string;
            };
            UnexpectedResponse: {
                origin: string;
                queryId: string;
            };
            ResponseReady: {
                queryId: string;
                response: string;
            };
            Notified: {
                queryId: string;
                palletIndex: string;
                callIndex: string;
            };
            NotifyOverweight: {
                queryId: string;
                palletIndex: string;
                callIndex: string;
                actualWeight: string;
                maxBudgetedWeight: string;
            };
            NotifyDispatchError: {
                queryId: string;
                palletIndex: string;
                callIndex: string;
            };
            NotifyDecodeFailed: {
                queryId: string;
                palletIndex: string;
                callIndex: string;
            };
            InvalidResponder: {
                origin: string;
                queryId: string;
                expectedLocation: string;
            };
            InvalidResponderVersion: {
                origin: string;
                queryId: string;
            };
            ResponseTaken: {
                queryId: string;
            };
            AssetsTrapped: {
                _alias: {
                    hash_: string;
                };
                hash_: string;
                origin: string;
                assets: string;
            };
            VersionChangeNotified: {
                destination: string;
                result: string;
                cost: string;
                messageId: string;
            };
            SupportedVersionChanged: {
                location: string;
                version: string;
            };
            NotifyTargetSendFail: {
                location: string;
                queryId: string;
                error: string;
            };
            NotifyTargetMigrationFail: {
                location: string;
                queryId: string;
            };
            InvalidQuerierVersion: {
                origin: string;
                queryId: string;
            };
            InvalidQuerier: {
                origin: string;
                queryId: string;
                expectedQuerier: string;
                maybeActualQuerier: string;
            };
            VersionNotifyStarted: {
                destination: string;
                cost: string;
                messageId: string;
            };
            VersionNotifyRequested: {
                destination: string;
                cost: string;
                messageId: string;
            };
            VersionNotifyUnrequested: {
                destination: string;
                cost: string;
                messageId: string;
            };
            FeesPaid: {
                paying: string;
                fees: string;
            };
            AssetsClaimed: {
                _alias: {
                    hash_: string;
                };
                hash_: string;
                origin: string;
                assets: string;
            };
        };
    };
    /**
     * Lookup260: pallet_ethereum::pallet::Event
     **/
    PalletEthereumEvent: {
        _enum: {
            Executed: {
                from: string;
                to: string;
                transactionHash: string;
                exitReason: string;
                extraData: string;
            };
        };
    };
    /**
     * Lookup261: evm_core::error::ExitReason
     **/
    EvmCoreErrorExitReason: {
        _enum: {
            Succeed: string;
            Error: string;
            Revert: string;
            Fatal: string;
        };
    };
    /**
     * Lookup262: evm_core::error::ExitSucceed
     **/
    EvmCoreErrorExitSucceed: {
        _enum: string[];
    };
    /**
     * Lookup263: evm_core::error::ExitError
     **/
    EvmCoreErrorExitError: {
        _enum: {
            StackUnderflow: string;
            StackOverflow: string;
            InvalidJump: string;
            InvalidRange: string;
            DesignatedInvalid: string;
            CallTooDeep: string;
            CreateCollision: string;
            CreateContractLimit: string;
            OutOfOffset: string;
            OutOfGas: string;
            OutOfFund: string;
            PCUnderflow: string;
            CreateEmpty: string;
            Other: string;
            MaxNonce: string;
            InvalidCode: string;
        };
    };
    /**
     * Lookup267: evm_core::error::ExitRevert
     **/
    EvmCoreErrorExitRevert: {
        _enum: string[];
    };
    /**
     * Lookup268: evm_core::error::ExitFatal
     **/
    EvmCoreErrorExitFatal: {
        _enum: {
            NotSupported: string;
            UnhandledInterrupt: string;
            CallErrorAsFatal: string;
            Other: string;
        };
    };
    /**
     * Lookup269: pallet_evm::pallet::Event<T>
     **/
    PalletEvmEvent: {
        _enum: {
            Log: {
                log: string;
            };
            Created: {
                address: string;
            };
            CreatedFailed: {
                address: string;
            };
            Executed: {
                address: string;
            };
            ExecutedFailed: {
                address: string;
            };
        };
    };
    /**
     * Lookup270: ethereum::log::Log
     **/
    EthereumLog: {
        address: string;
        topics: string;
        data: string;
    };
    /**
     * Lookup271: pallet_base_fee::pallet::Event
     **/
    PalletBaseFeeEvent: {
        _enum: {
            NewBaseFeePerGas: {
                fee: string;
            };
            BaseFeeOverflow: string;
            NewElasticity: {
                elasticity: string;
            };
        };
    };
    /**
     * Lookup272: frame_system::Phase
     **/
    FrameSystemPhase: {
        _enum: {
            ApplyExtrinsic: string;
            Finalization: string;
            Initialization: string;
        };
    };
    /**
     * Lookup274: frame_system::LastRuntimeUpgradeInfo
     **/
    FrameSystemLastRuntimeUpgradeInfo: {
        specVersion: string;
        specName: string;
    };
    /**
     * Lookup275: frame_system::limits::BlockWeights
     **/
    FrameSystemLimitsBlockWeights: {
        baseBlock: string;
        maxBlock: string;
        perClass: string;
    };
    /**
     * Lookup276: frame_support::dispatch::PerDispatchClass<frame_system::limits::WeightsPerClass>
     **/
    FrameSupportDispatchPerDispatchClassWeightsPerClass: {
        normal: string;
        operational: string;
        mandatory: string;
    };
    /**
     * Lookup277: frame_system::limits::WeightsPerClass
     **/
    FrameSystemLimitsWeightsPerClass: {
        baseExtrinsic: string;
        maxExtrinsic: string;
        maxTotal: string;
        reserved: string;
    };
    /**
     * Lookup278: frame_system::limits::BlockLength
     **/
    FrameSystemLimitsBlockLength: {
        max: string;
    };
    /**
     * Lookup279: frame_support::dispatch::PerDispatchClass<T>
     **/
    FrameSupportDispatchPerDispatchClassU32: {
        normal: string;
        operational: string;
        mandatory: string;
    };
    /**
     * Lookup280: sp_weights::RuntimeDbWeight
     **/
    SpWeightsRuntimeDbWeight: {
        read: string;
        write: string;
    };
    /**
     * Lookup281: sp_version::RuntimeVersion
     **/
    SpVersionRuntimeVersion: {
        specName: string;
        implName: string;
        authoringVersion: string;
        specVersion: string;
        implVersion: string;
        apis: string;
        transactionVersion: string;
        stateVersion: string;
    };
    /**
     * Lookup285: frame_system::pallet::Error<T>
     **/
    FrameSystemError: {
        _enum: string[];
    };
    /**
     * Lookup287: cumulus_pallet_parachain_system::unincluded_segment::Ancestor<primitive_types::H256>
     **/
    CumulusPalletParachainSystemUnincludedSegmentAncestor: {
        usedBandwidth: string;
        paraHeadHash: string;
        consumedGoAheadSignal: string;
    };
    /**
     * Lookup288: cumulus_pallet_parachain_system::unincluded_segment::UsedBandwidth
     **/
    CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth: {
        umpMsgCount: string;
        umpTotalBytes: string;
        hrmpOutgoing: string;
    };
    /**
     * Lookup290: cumulus_pallet_parachain_system::unincluded_segment::HrmpChannelUpdate
     **/
    CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate: {
        msgCount: string;
        totalBytes: string;
    };
    /**
     * Lookup294: polkadot_primitives::v5::UpgradeGoAhead
     **/
    PolkadotPrimitivesV5UpgradeGoAhead: {
        _enum: string[];
    };
    /**
     * Lookup295: cumulus_pallet_parachain_system::unincluded_segment::SegmentTracker<primitive_types::H256>
     **/
    CumulusPalletParachainSystemUnincludedSegmentSegmentTracker: {
        usedBandwidth: string;
        hrmpWatermark: string;
        consumedGoAheadSignal: string;
    };
    /**
     * Lookup297: polkadot_primitives::v5::UpgradeRestriction
     **/
    PolkadotPrimitivesV5UpgradeRestriction: {
        _enum: string[];
    };
    /**
     * Lookup298: cumulus_pallet_parachain_system::relay_state_snapshot::MessagingStateSnapshot
     **/
    CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot: {
        dmqMqcHead: string;
        relayDispatchQueueRemainingCapacity: string;
        ingressChannels: string;
        egressChannels: string;
    };
    /**
     * Lookup299: cumulus_pallet_parachain_system::relay_state_snapshot::RelayDispatchQueueRemainingCapacity
     **/
    CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity: {
        remainingCount: string;
        remainingSize: string;
    };
    /**
     * Lookup302: polkadot_primitives::v5::AbridgedHrmpChannel
     **/
    PolkadotPrimitivesV5AbridgedHrmpChannel: {
        maxCapacity: string;
        maxTotalSize: string;
        maxMessageSize: string;
        msgCount: string;
        totalSize: string;
        mqcHead: string;
    };
    /**
     * Lookup303: polkadot_primitives::v5::AbridgedHostConfiguration
     **/
    PolkadotPrimitivesV5AbridgedHostConfiguration: {
        maxCodeSize: string;
        maxHeadDataSize: string;
        maxUpwardQueueCount: string;
        maxUpwardQueueSize: string;
        maxUpwardMessageSize: string;
        maxUpwardMessageNumPerCandidate: string;
        hrmpMaxMessageNumPerCandidate: string;
        validationUpgradeCooldown: string;
        validationUpgradeDelay: string;
        asyncBackingParams: string;
    };
    /**
     * Lookup304: polkadot_primitives::vstaging::AsyncBackingParams
     **/
    PolkadotPrimitivesVstagingAsyncBackingParams: {
        maxCandidateDepth: string;
        allowedAncestryLen: string;
    };
    /**
     * Lookup310: polkadot_core_primitives::OutboundHrmpMessage<polkadot_parachain_primitives::primitives::Id>
     **/
    PolkadotCorePrimitivesOutboundHrmpMessage: {
        recipient: string;
        data: string;
    };
    /**
     * Lookup311: cumulus_pallet_parachain_system::CodeUpgradeAuthorization<T>
     **/
    CumulusPalletParachainSystemCodeUpgradeAuthorization: {
        codeHash: string;
        checkVersion: string;
    };
    /**
     * Lookup312: cumulus_pallet_parachain_system::pallet::Error<T>
     **/
    CumulusPalletParachainSystemError: {
        _enum: string[];
    };
    /**
     * Lookup314: pallet_balances::types::BalanceLock<Balance>
     **/
    PalletBalancesBalanceLock: {
        id: string;
        amount: string;
        reasons: string;
    };
    /**
     * Lookup315: pallet_balances::types::Reasons
     **/
    PalletBalancesReasons: {
        _enum: string[];
    };
    /**
     * Lookup318: pallet_balances::types::ReserveData<ReserveIdentifier, Balance>
     **/
    PalletBalancesReserveData: {
        id: string;
        amount: string;
    };
    /**
     * Lookup321: pallet_balances::types::IdAmount<autograph_parachain_runtime::RuntimeHoldReason, Balance>
     **/
    PalletBalancesIdAmountRuntimeHoldReason: {
        id: string;
        amount: string;
    };
    /**
     * Lookup322: autograph_parachain_runtime::RuntimeHoldReason
     **/
    AutographParachainRuntimeRuntimeHoldReason: string;
    /**
     * Lookup325: pallet_balances::types::IdAmount<autograph_parachain_runtime::RuntimeFreezeReason, Balance>
     **/
    PalletBalancesIdAmountRuntimeFreezeReason: {
        id: string;
        amount: string;
    };
    /**
     * Lookup326: autograph_parachain_runtime::RuntimeFreezeReason
     **/
    AutographParachainRuntimeRuntimeFreezeReason: string;
    /**
     * Lookup328: pallet_balances::pallet::Error<T, I>
     **/
    PalletBalancesError: {
        _enum: string[];
    };
    /**
     * Lookup329: pallet_bounties::Bounty<sp_core::crypto::AccountId32, Balance, BlockNumber>
     **/
    PalletBountiesBounty: {
        proposer: string;
        value: string;
        fee: string;
        curatorDeposit: string;
        bond: string;
        status: string;
    };
    /**
     * Lookup330: pallet_bounties::BountyStatus<sp_core::crypto::AccountId32, BlockNumber>
     **/
    PalletBountiesBountyStatus: {
        _enum: {
            Proposed: string;
            Approved: string;
            Funded: string;
            CuratorProposed: {
                curator: string;
            };
            Active: {
                curator: string;
                updateDue: string;
            };
            PendingPayout: {
                curator: string;
                beneficiary: string;
                unlockAt: string;
            };
        };
    };
    /**
     * Lookup335: pallet_bounties::pallet::Error<T, I>
     **/
    PalletBountiesError: {
        _enum: string[];
    };
    /**
     * Lookup337: pallet_transaction_payment::Releases
     **/
    PalletTransactionPaymentReleases: {
        _enum: string[];
    };
    /**
     * Lookup338: pallet_treasury::Proposal<sp_core::crypto::AccountId32, Balance>
     **/
    PalletTreasuryProposal: {
        proposer: string;
        value: string;
        beneficiary: string;
        bond: string;
    };
    /**
     * Lookup339: frame_support::PalletId
     **/
    FrameSupportPalletId: string;
    /**
     * Lookup340: pallet_treasury::pallet::Error<T, I>
     **/
    PalletTreasuryError: {
        _enum: string[];
    };
    /**
     * Lookup347: sp_core::crypto::KeyTypeId
     **/
    SpCoreCryptoKeyTypeId: string;
    /**
     * Lookup348: pallet_session::pallet::Error<T>
     **/
    PalletSessionError: {
        _enum: string[];
    };
    /**
     * Lookup349: parachain_staking::types::RoundInfo<BlockNumber>
     **/
    ParachainStakingRoundInfo: {
        current: string;
        first: string;
        length: string;
    };
    /**
     * Lookup350: parachain_staking::types::DelegationCounter
     **/
    ParachainStakingDelegationCounter: {
        round: string;
        counter: string;
    };
    /**
     * Lookup351: parachain_staking::types::Stake<sp_core::crypto::AccountId32, Balance>
     **/
    ParachainStakingStake: {
        owner: string;
        amount: string;
    };
    /**
     * Lookup352: parachain_staking::types::Candidate<sp_core::crypto::AccountId32, Balance, MaxDelegatorsPerCandidate>
     **/
    ParachainStakingCandidate: {
        id: string;
        stake: string;
        delegators: string;
        total: string;
        status: string;
    };
    /**
     * Lookup353: parachain_staking::set::OrderedSet<parachain_staking::types::Stake<sp_core::crypto::AccountId32, Balance>, S>
     **/
    ParachainStakingSetOrderedSet: string;
    /**
     * Lookup356: parachain_staking::types::CandidateStatus
     **/
    ParachainStakingCandidateStatus: {
        _enum: {
            Active: string;
            Leaving: string;
        };
    };
    /**
     * Lookup357: parachain_staking::types::TotalStake<Balance>
     **/
    ParachainStakingTotalStake: {
        collators: string;
        delegators: string;
    };
    /**
     * Lookup360: parachain_staking::inflation::InflationInfo
     **/
    ParachainStakingInflationInflationInfo: {
        collator: string;
        delegator: string;
    };
    /**
     * Lookup361: parachain_staking::inflation::StakingInfo
     **/
    ParachainStakingInflationStakingInfo: {
        maxRate: string;
        rewardRate: string;
    };
    /**
     * Lookup362: parachain_staking::inflation::RewardRate
     **/
    ParachainStakingInflationRewardRate: {
        annual: string;
        perBlock: string;
    };
    /**
     * Lookup367: parachain_staking::pallet::Error<T>
     **/
    ParachainStakingError: {
        _enum: string[];
    };
    /**
     * Lookup370: pallet_conviction_voting::vote::Voting<Balance, sp_core::crypto::AccountId32, BlockNumber, PollIndex, MaxVotes>
     **/
    PalletConvictionVotingVoteVoting: {
        _enum: {
            Casting: string;
            Delegating: string;
        };
    };
    /**
     * Lookup371: pallet_conviction_voting::vote::Casting<Balance, BlockNumber, PollIndex, MaxVotes>
     **/
    PalletConvictionVotingVoteCasting: {
        votes: string;
        delegations: string;
        prior: string;
    };
    /**
     * Lookup375: pallet_conviction_voting::types::Delegations<Balance>
     **/
    PalletConvictionVotingDelegations: {
        votes: string;
        capital: string;
    };
    /**
     * Lookup376: pallet_conviction_voting::vote::PriorLock<BlockNumber, Balance>
     **/
    PalletConvictionVotingVotePriorLock: string;
    /**
     * Lookup377: pallet_conviction_voting::vote::Delegating<Balance, sp_core::crypto::AccountId32, BlockNumber>
     **/
    PalletConvictionVotingVoteDelegating: {
        balance: string;
        target: string;
        conviction: string;
        delegations: string;
        prior: string;
    };
    /**
     * Lookup381: pallet_conviction_voting::pallet::Error<T, I>
     **/
    PalletConvictionVotingError: {
        _enum: string[];
    };
    /**
     * Lookup382: pallet_ranked_collective::MemberRecord
     **/
    PalletRankedCollectiveMemberRecord: {
        rank: string;
    };
    /**
     * Lookup387: pallet_ranked_collective::pallet::Error<T, I>
     **/
    PalletRankedCollectiveError: {
        _enum: string[];
    };
    /**
     * Lookup388: pallet_referenda::types::ReferendumInfo<TrackId, autograph_parachain_runtime::OriginCaller, Moment, frame_support::traits::preimages::Bounded<autograph_parachain_runtime::RuntimeCall>, Balance, pallet_ranked_collective::Tally<T, I, M>, sp_core::crypto::AccountId32, ScheduleAddress>
     **/
    PalletReferendaReferendumInfoRankedCollectiveTally: {
        _enum: {
            Ongoing: string;
            Approved: string;
            Rejected: string;
            Cancelled: string;
            TimedOut: string;
            Killed: string;
        };
    };
    /**
     * Lookup389: pallet_referenda::types::ReferendumStatus<TrackId, autograph_parachain_runtime::OriginCaller, Moment, frame_support::traits::preimages::Bounded<autograph_parachain_runtime::RuntimeCall>, Balance, pallet_ranked_collective::Tally<T, I, M>, sp_core::crypto::AccountId32, ScheduleAddress>
     **/
    PalletReferendaReferendumStatusRankedCollectiveTally: {
        track: string;
        origin: string;
        proposal: string;
        enactment: string;
        submitted: string;
        submissionDeposit: string;
        decisionDeposit: string;
        deciding: string;
        tally: string;
        inQueue: string;
        alarm: string;
    };
    /**
     * Lookup390: pallet_referenda::types::Deposit<sp_core::crypto::AccountId32, Balance>
     **/
    PalletReferendaDeposit: {
        who: string;
        amount: string;
    };
    /**
     * Lookup393: pallet_referenda::types::DecidingStatus<BlockNumber>
     **/
    PalletReferendaDecidingStatus: {
        since: string;
        confirming: string;
    };
    /**
     * Lookup402: pallet_referenda::types::TrackInfo<Balance, Moment>
     **/
    PalletReferendaTrackInfo: {
        name: string;
        maxDeciding: string;
        decisionDeposit: string;
        preparePeriod: string;
        decisionPeriod: string;
        confirmPeriod: string;
        minEnactmentPeriod: string;
        minApproval: string;
        minSupport: string;
    };
    /**
     * Lookup403: pallet_referenda::types::Curve
     **/
    PalletReferendaCurve: {
        _enum: {
            LinearDecreasing: {
                length: string;
                floor: string;
                ceil: string;
            };
            SteppedDecreasing: {
                begin: string;
                end: string;
                step: string;
                period: string;
            };
            Reciprocal: {
                factor: string;
                xOffset: string;
                yOffset: string;
            };
        };
    };
    /**
     * Lookup407: pallet_referenda::pallet::Error<T, I>
     **/
    PalletReferendaError: {
        _enum: string[];
    };
    /**
     * Lookup408: pallet_referenda::types::ReferendumInfo<TrackId, autograph_parachain_runtime::OriginCaller, Moment, frame_support::traits::preimages::Bounded<autograph_parachain_runtime::RuntimeCall>, Balance, pallet_conviction_voting::types::Tally<Votes, Total>, sp_core::crypto::AccountId32, ScheduleAddress>
     **/
    PalletReferendaReferendumInfoConvictionVotingTally: {
        _enum: {
            Ongoing: string;
            Approved: string;
            Rejected: string;
            Cancelled: string;
            TimedOut: string;
            Killed: string;
        };
    };
    /**
     * Lookup409: pallet_referenda::types::ReferendumStatus<TrackId, autograph_parachain_runtime::OriginCaller, Moment, frame_support::traits::preimages::Bounded<autograph_parachain_runtime::RuntimeCall>, Balance, pallet_conviction_voting::types::Tally<Votes, Total>, sp_core::crypto::AccountId32, ScheduleAddress>
     **/
    PalletReferendaReferendumStatusConvictionVotingTally: {
        track: string;
        origin: string;
        proposal: string;
        enactment: string;
        submitted: string;
        submissionDeposit: string;
        decisionDeposit: string;
        deciding: string;
        tally: string;
        inQueue: string;
        alarm: string;
    };
    /**
     * Lookup414: pallet_whitelist::pallet::Error<T>
     **/
    PalletWhitelistError: {
        _enum: string[];
    };
    /**
     * Lookup416: pallet_multisig::Multisig<BlockNumber, Balance, sp_core::crypto::AccountId32, MaxApprovals>
     **/
    PalletMultisigMultisig: {
        when: string;
        deposit: string;
        depositor: string;
        approvals: string;
    };
    /**
     * Lookup418: pallet_multisig::pallet::Error<T>
     **/
    PalletMultisigError: {
        _enum: string[];
    };
    /**
     * Lookup419: pallet_sudo::pallet::Error<T>
     **/
    PalletSudoError: {
        _enum: string[];
    };
    /**
     * Lookup420: pallet_tx_pause::pallet::Error<T>
     **/
    PalletTxPauseError: {
        _enum: string[];
    };
    /**
     * Lookup423: pallet_scheduler::Scheduled<Name, frame_support::traits::preimages::Bounded<autograph_parachain_runtime::RuntimeCall>, BlockNumber, autograph_parachain_runtime::OriginCaller, sp_core::crypto::AccountId32>
     **/
    PalletSchedulerScheduled: {
        maybeId: string;
        priority: string;
        call: string;
        maybePeriodic: string;
        origin: string;
    };
    /**
     * Lookup425: pallet_scheduler::pallet::Error<T>
     **/
    PalletSchedulerError: {
        _enum: string[];
    };
    /**
     * Lookup426: pallet_preimage::RequestStatus<sp_core::crypto::AccountId32, Balance>
     **/
    PalletPreimageRequestStatus: {
        _enum: {
            Unrequested: {
                deposit: string;
                len: string;
            };
            Requested: {
                deposit: string;
                count: string;
                len: string;
            };
        };
    };
    /**
     * Lookup430: pallet_preimage::pallet::Error<T>
     **/
    PalletPreimageError: {
        _enum: string[];
    };
    /**
     * Lookup431: pallet_whitelist::Investor<sp_core::crypto::AccountId32>
     **/
    PalletWhitelistInvestor: {
        account: string;
        isActive: string;
    };
    /**
     * Lookup435: pallet_access::pallet::Error<T>
     **/
    PalletAccessError: {
        _enum: string[];
    };
    /**
     * Lookup436: collection_primitives::Collection<sp_core::crypto::AccountId32>
     **/
    CollectionPrimitivesCollection: {
        owner: string;
        mode: string;
        name: string;
        description: string;
        tokenPrefix: string;
        limits: string;
    };
    /**
     * Lookup437: collection_primitives::CollectionMode
     **/
    CollectionPrimitivesCollectionMode: {
        _enum: string[];
    };
    /**
     * Lookup438: collection_primitives::properties::Properties
     **/
    CollectionPrimitivesProperties: {
        map: string;
        consumedSpace: string;
        spaceLimit: string;
    };
    /**
     * Lookup439: collection_primitives::properties::PropertiesMap<bounded_collections::bounded_vec::BoundedVec<T, S>>
     **/
    CollectionPrimitivesPropertiesPropertiesMapBoundedVec: string;
    /**
     * Lookup444: collection_primitives::properties::PropertiesMap<collection_primitives::properties::PropertyPermission>
     **/
    CollectionPrimitivesPropertiesPropertiesMapPropertyPermission: string;
    /**
     * Lookup449: pallet_common::pallet::Error<T>
     **/
    PalletCommonError: {
        _enum: string[];
    };
    /**
     * Lookup455: pallet_refungible::pallet::Error<T>
     **/
    PalletRefungibleError: {
        _enum: string[];
    };
    /**
     * Lookup457: cumulus_pallet_xcmp_queue::InboundChannelDetails
     **/
    CumulusPalletXcmpQueueInboundChannelDetails: {
        sender: string;
        state: string;
        messageMetadata: string;
    };
    /**
     * Lookup458: cumulus_pallet_xcmp_queue::InboundState
     **/
    CumulusPalletXcmpQueueInboundState: {
        _enum: string[];
    };
    /**
     * Lookup461: polkadot_parachain_primitives::primitives::XcmpMessageFormat
     **/
    PolkadotParachainPrimitivesPrimitivesXcmpMessageFormat: {
        _enum: string[];
    };
    /**
     * Lookup464: cumulus_pallet_xcmp_queue::OutboundChannelDetails
     **/
    CumulusPalletXcmpQueueOutboundChannelDetails: {
        recipient: string;
        state: string;
        signalsExist: string;
        firstIndex: string;
        lastIndex: string;
    };
    /**
     * Lookup465: cumulus_pallet_xcmp_queue::OutboundState
     **/
    CumulusPalletXcmpQueueOutboundState: {
        _enum: string[];
    };
    /**
     * Lookup467: cumulus_pallet_xcmp_queue::QueueConfigData
     **/
    CumulusPalletXcmpQueueQueueConfigData: {
        suspendThreshold: string;
        dropThreshold: string;
        resumeThreshold: string;
        thresholdWeight: string;
        weightRestrictDecay: string;
        xcmpMaxIndividualWeight: string;
    };
    /**
     * Lookup469: cumulus_pallet_xcmp_queue::pallet::Error<T>
     **/
    CumulusPalletXcmpQueueError: {
        _enum: string[];
    };
    /**
     * Lookup470: cumulus_pallet_xcm::pallet::Error<T>
     **/
    CumulusPalletXcmError: string;
    /**
     * Lookup471: cumulus_pallet_dmp_queue::ConfigData
     **/
    CumulusPalletDmpQueueConfigData: {
        maxIndividual: string;
    };
    /**
     * Lookup472: cumulus_pallet_dmp_queue::PageIndexData
     **/
    CumulusPalletDmpQueuePageIndexData: {
        beginUsed: string;
        endUsed: string;
        overweightCount: string;
    };
    /**
     * Lookup475: cumulus_pallet_dmp_queue::pallet::Error<T>
     **/
    CumulusPalletDmpQueueError: {
        _enum: string[];
    };
    /**
     * Lookup476: pallet_xcm::pallet::QueryStatus<BlockNumber>
     **/
    PalletXcmQueryStatus: {
        _enum: {
            Pending: {
                responder: string;
                maybeMatchQuerier: string;
                maybeNotify: string;
                timeout: string;
            };
            VersionNotifier: {
                origin: string;
                isActive: string;
            };
            Ready: {
                response: string;
                at: string;
            };
        };
    };
    /**
     * Lookup480: staging_xcm::VersionedResponse
     **/
    StagingXcmVersionedResponse: {
        _enum: {
            __Unused0: string;
            __Unused1: string;
            V2: string;
            V3: string;
        };
    };
    /**
     * Lookup486: pallet_xcm::pallet::VersionMigrationStage
     **/
    PalletXcmVersionMigrationStage: {
        _enum: {
            MigrateSupportedVersion: string;
            MigrateVersionNotifiers: string;
            NotifyCurrentTargets: string;
            MigrateAndNotifyOldTargets: string;
        };
    };
    /**
     * Lookup489: staging_xcm::VersionedAssetId
     **/
    StagingXcmVersionedAssetId: {
        _enum: {
            __Unused0: string;
            __Unused1: string;
            __Unused2: string;
            V3: string;
        };
    };
    /**
     * Lookup490: pallet_xcm::pallet::RemoteLockedFungibleRecord<ConsumerIdentifier, MaxConsumers>
     **/
    PalletXcmRemoteLockedFungibleRecord: {
        amount: string;
        owner: string;
        locker: string;
        consumers: string;
    };
    /**
     * Lookup497: pallet_xcm::pallet::Error<T>
     **/
    PalletXcmError: {
        _enum: string[];
    };
    /**
     * Lookup500: fp_rpc::TransactionStatus
     **/
    FpRpcTransactionStatus: {
        transactionHash: string;
        transactionIndex: string;
        from: string;
        to: string;
        contractAddress: string;
        logs: string;
        logsBloom: string;
    };
    /**
     * Lookup503: ethbloom::Bloom
     **/
    EthbloomBloom: string;
    /**
     * Lookup505: ethereum::receipt::ReceiptV3
     **/
    EthereumReceiptReceiptV3: {
        _enum: {
            Legacy: string;
            EIP2930: string;
            EIP1559: string;
        };
    };
    /**
     * Lookup506: ethereum::receipt::EIP658ReceiptData
     **/
    EthereumReceiptEip658ReceiptData: {
        statusCode: string;
        usedGas: string;
        logsBloom: string;
        logs: string;
    };
    /**
     * Lookup507: ethereum::block::Block<ethereum::transaction::TransactionV2>
     **/
    EthereumBlock: {
        header: string;
        transactions: string;
        ommers: string;
    };
    /**
     * Lookup508: ethereum::header::Header
     **/
    EthereumHeader: {
        parentHash: string;
        ommersHash: string;
        beneficiary: string;
        stateRoot: string;
        transactionsRoot: string;
        receiptsRoot: string;
        logsBloom: string;
        difficulty: string;
        number: string;
        gasLimit: string;
        gasUsed: string;
        timestamp: string;
        extraData: string;
        mixHash: string;
        nonce: string;
    };
    /**
     * Lookup509: ethereum_types::hash::H64
     **/
    EthereumTypesHashH64: string;
    /**
     * Lookup514: pallet_ethereum::pallet::Error<T>
     **/
    PalletEthereumError: {
        _enum: string[];
    };
    /**
     * Lookup515: pallet_evm::CodeMetadata
     **/
    PalletEvmCodeMetadata: {
        _alias: {
            size_: string;
            hash_: string;
        };
        size_: string;
        hash_: string;
    };
    /**
     * Lookup517: pallet_evm::pallet::Error<T>
     **/
    PalletEvmError: {
        _enum: string[];
    };
    /**
     * Lookup519: sp_runtime::MultiSignature
     **/
    SpRuntimeMultiSignature: {
        _enum: {
            Ed25519: string;
            Sr25519: string;
            Ecdsa: string;
        };
    };
    /**
     * Lookup520: sp_core::ed25519::Signature
     **/
    SpCoreEd25519Signature: string;
    /**
     * Lookup522: sp_core::sr25519::Signature
     **/
    SpCoreSr25519Signature: string;
    /**
     * Lookup523: sp_core::ecdsa::Signature
     **/
    SpCoreEcdsaSignature: string;
    /**
     * Lookup526: frame_system::extensions::check_non_zero_sender::CheckNonZeroSender<T>
     **/
    FrameSystemExtensionsCheckNonZeroSender: string;
    /**
     * Lookup527: frame_system::extensions::check_spec_version::CheckSpecVersion<T>
     **/
    FrameSystemExtensionsCheckSpecVersion: string;
    /**
     * Lookup528: frame_system::extensions::check_tx_version::CheckTxVersion<T>
     **/
    FrameSystemExtensionsCheckTxVersion: string;
    /**
     * Lookup529: frame_system::extensions::check_genesis::CheckGenesis<T>
     **/
    FrameSystemExtensionsCheckGenesis: string;
    /**
     * Lookup532: frame_system::extensions::check_nonce::CheckNonce<T>
     **/
    FrameSystemExtensionsCheckNonce: string;
    /**
     * Lookup533: frame_system::extensions::check_weight::CheckWeight<T>
     **/
    FrameSystemExtensionsCheckWeight: string;
    /**
     * Lookup534: pallet_transaction_payment::ChargeTransactionPayment<T>
     **/
    PalletTransactionPaymentChargeTransactionPayment: string;
    /**
     * Lookup536: autograph_parachain_runtime::Runtime
     **/
    AutographParachainRuntimeRuntime: string;
};
export default _default;
