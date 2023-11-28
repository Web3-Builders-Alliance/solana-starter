export type WbaVault = {
  version: "0.1.0";
  name: "wba_vault";
  instructions: [
    {
      name: "initialize";
      accounts: [
        {
          name: "owner";
          isMut: true;
          isSigner: true;
        },
        {
          name: "vaultState";
          isMut: true;
          isSigner: true;
        },
        {
          name: "vaultAuth";
          isMut: false;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: "const";
                type: "string";
                value: "auth";
              },
              {
                kind: "account";
                type: "publicKey";
                account: "Vault";
                path: "vault_state";
              },
            ];
          };
        },
        {
          name: "vault";
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: "const";
                type: "string";
                value: "vault";
              },
              {
                kind: "account";
                type: "publicKey";
                path: "vault_auth";
              },
            ];
          };
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: "deposit";
      accounts: [
        {
          name: "owner";
          isMut: true;
          isSigner: true;
        },
        {
          name: "vaultState";
          isMut: true;
          isSigner: false;
          relations: ["owner"];
        },
        {
          name: "vaultAuth";
          isMut: false;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: "const";
                type: "string";
                value: "auth";
              },
              {
                kind: "account";
                type: "publicKey";
                account: "Vault";
                path: "vault_state";
              },
            ];
          };
        },
        {
          name: "vault";
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: "const";
                type: "string";
                value: "vault";
              },
              {
                kind: "account";
                type: "publicKey";
                path: "vault_auth";
              },
            ];
          };
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: "amount";
          type: "u64";
        },
      ];
    },
    {
      name: "withdraw";
      accounts: [
        {
          name: "owner";
          isMut: true;
          isSigner: true;
        },
        {
          name: "vaultState";
          isMut: true;
          isSigner: false;
          relations: ["owner"];
        },
        {
          name: "vaultAuth";
          isMut: false;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: "const";
                type: "string";
                value: "auth";
              },
              {
                kind: "account";
                type: "publicKey";
                account: "Vault";
                path: "vault_state";
              },
            ];
          };
        },
        {
          name: "vault";
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: "const";
                type: "string";
                value: "vault";
              },
              {
                kind: "account";
                type: "publicKey";
                path: "vault_auth";
              },
            ];
          };
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: "amount";
          type: "u64";
        },
      ];
    },
    {
      name: "depositSpl";
      accounts: [
        {
          name: "owner";
          isMut: true;
          isSigner: true;
        },
        {
          name: "ownerAta";
          isMut: true;
          isSigner: false;
        },
        {
          name: "vaultState";
          isMut: true;
          isSigner: false;
          relations: ["owner"];
        },
        {
          name: "vaultAuth";
          isMut: false;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: "const";
                type: "string";
                value: "auth";
              },
              {
                kind: "account";
                type: "publicKey";
                account: "Vault";
                path: "vault_state";
              },
            ];
          };
        },
        {
          name: "vaultAta";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "associatedTokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: "amount";
          type: "u64";
        },
      ];
    },
    {
      name: "withdrawSpl";
      accounts: [
        {
          name: "owner";
          isMut: true;
          isSigner: true;
        },
        {
          name: "ownerAta";
          isMut: true;
          isSigner: false;
        },
        {
          name: "vaultState";
          isMut: true;
          isSigner: false;
          relations: ["owner"];
        },
        {
          name: "vaultAuth";
          isMut: false;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: "const";
                type: "string";
                value: "auth";
              },
              {
                kind: "account";
                type: "publicKey";
                account: "Vault";
                path: "vault_state";
              },
            ];
          };
        },
        {
          name: "vaultAta";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "associatedTokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: "amount";
          type: "u64";
        },
      ];
    },
    {
      name: "depositNft";
      accounts: [
        {
          name: "owner";
          isMut: true;
          isSigner: true;
        },
        {
          name: "ownerAta";
          isMut: true;
          isSigner: false;
        },
        {
          name: "vaultState";
          isMut: true;
          isSigner: false;
          relations: ["owner"];
        },
        {
          name: "vaultAuth";
          isMut: false;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: "const";
                type: "string";
                value: "auth";
              },
              {
                kind: "account";
                type: "publicKey";
                account: "Vault";
                path: "vault_state";
              },
            ];
          };
        },
        {
          name: "vaultAta";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "nftMetadata";
          isMut: false;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: "const";
                type: "string";
                value: "metadata";
              },
              {
                kind: "account";
                type: "publicKey";
                path: "metadata_program";
              },
              {
                kind: "account";
                type: "publicKey";
                account: "Mint";
                path: "token_mint";
              },
            ];
            programId: {
              kind: "account";
              type: "publicKey";
              path: "metadata_program";
            };
          };
        },
        {
          name: "nftMasterEdition";
          isMut: false;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: "const";
                type: "string";
                value: "metadata";
              },
              {
                kind: "account";
                type: "publicKey";
                path: "metadata_program";
              },
              {
                kind: "account";
                type: "publicKey";
                account: "Mint";
                path: "token_mint";
              },
              {
                kind: "const";
                type: "string";
                value: "edition";
              },
            ];
            programId: {
              kind: "account";
              type: "publicKey";
              path: "metadata_program";
            };
          };
        },
        {
          name: "metadataProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "associatedTokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: "withdrawNft";
      accounts: [
        {
          name: "owner";
          isMut: true;
          isSigner: true;
        },
        {
          name: "ownerAta";
          isMut: true;
          isSigner: false;
        },
        {
          name: "vaultState";
          isMut: true;
          isSigner: false;
          relations: ["owner"];
        },
        {
          name: "vaultAuth";
          isMut: false;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: "const";
                type: "string";
                value: "auth";
              },
              {
                kind: "account";
                type: "publicKey";
                account: "Vault";
                path: "vault_state";
              },
            ];
          };
        },
        {
          name: "vaultAta";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "nftMetadata";
          isMut: false;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: "const";
                type: "string";
                value: "metadata";
              },
              {
                kind: "account";
                type: "publicKey";
                path: "metadata_program";
              },
              {
                kind: "account";
                type: "publicKey";
                account: "Mint";
                path: "token_mint";
              },
            ];
            programId: {
              kind: "account";
              type: "publicKey";
              path: "metadata_program";
            };
          };
        },
        {
          name: "nftMasterEdition";
          isMut: false;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: "const";
                type: "string";
                value: "metadata";
              },
              {
                kind: "account";
                type: "publicKey";
                path: "metadata_program";
              },
              {
                kind: "account";
                type: "publicKey";
                account: "Mint";
                path: "token_mint";
              },
              {
                kind: "const";
                type: "string";
                value: "edition";
              },
            ];
            programId: {
              kind: "account";
              type: "publicKey";
              path: "metadata_program";
            };
          };
        },
        {
          name: "metadataProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "associatedTokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: "closeAccount";
      accounts: [
        {
          name: "owner";
          isMut: true;
          isSigner: true;
        },
        {
          name: "closeVaultState";
          isMut: true;
          isSigner: false;
          relations: ["owner"];
        },
        {
          name: "vaultState";
          isMut: true;
          isSigner: false;
          relations: ["owner"];
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
    },
  ];
  accounts: [
    {
      name: "Vault";
      type: {
        kind: "struct";
        fields: [
          {
            name: "owner";
            type: "publicKey";
          },
          {
            name: "authBump";
            type: "u8";
          },
          {
            name: "vaultBump";
            type: "u8";
          },
          {
            name: "score";
            type: "u8";
          },
        ];
      };
    },
  ];
};

export const IDL: WbaVault = {
  version: "0.1.0",
  name: "wba_vault",
  instructions: [
    {
      name: "initialize",
      accounts: [
        {
          name: "owner",
          isMut: true,
          isSigner: true,
        },
        {
          name: "vaultState",
          isMut: true,
          isSigner: true,
        },
        {
          name: "vaultAuth",
          isMut: false,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: "const",
                type: "string",
                value: "auth",
              },
              {
                kind: "account",
                type: "publicKey",
                account: "Vault",
                path: "vault_state",
              },
            ],
          },
        },
        {
          name: "vault",
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: "const",
                type: "string",
                value: "vault",
              },
              {
                kind: "account",
                type: "publicKey",
                path: "vault_auth",
              },
            ],
          },
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "deposit",
      accounts: [
        {
          name: "owner",
          isMut: true,
          isSigner: true,
        },
        {
          name: "vaultState",
          isMut: true,
          isSigner: false,
          relations: ["owner"],
        },
        {
          name: "vaultAuth",
          isMut: false,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: "const",
                type: "string",
                value: "auth",
              },
              {
                kind: "account",
                type: "publicKey",
                account: "Vault",
                path: "vault_state",
              },
            ],
          },
        },
        {
          name: "vault",
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: "const",
                type: "string",
                value: "vault",
              },
              {
                kind: "account",
                type: "publicKey",
                path: "vault_auth",
              },
            ],
          },
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "amount",
          type: "u64",
        },
      ],
    },
    {
      name: "withdraw",
      accounts: [
        {
          name: "owner",
          isMut: true,
          isSigner: true,
        },
        {
          name: "vaultState",
          isMut: true,
          isSigner: false,
          relations: ["owner"],
        },
        {
          name: "vaultAuth",
          isMut: false,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: "const",
                type: "string",
                value: "auth",
              },
              {
                kind: "account",
                type: "publicKey",
                account: "Vault",
                path: "vault_state",
              },
            ],
          },
        },
        {
          name: "vault",
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: "const",
                type: "string",
                value: "vault",
              },
              {
                kind: "account",
                type: "publicKey",
                path: "vault_auth",
              },
            ],
          },
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "amount",
          type: "u64",
        },
      ],
    },
    {
      name: "depositSpl",
      accounts: [
        {
          name: "owner",
          isMut: true,
          isSigner: true,
        },
        {
          name: "ownerAta",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultState",
          isMut: true,
          isSigner: false,
          relations: ["owner"],
        },
        {
          name: "vaultAuth",
          isMut: false,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: "const",
                type: "string",
                value: "auth",
              },
              {
                kind: "account",
                type: "publicKey",
                account: "Vault",
                path: "vault_state",
              },
            ],
          },
        },
        {
          name: "vaultAta",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "associatedTokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "amount",
          type: "u64",
        },
      ],
    },
    {
      name: "withdrawSpl",
      accounts: [
        {
          name: "owner",
          isMut: true,
          isSigner: true,
        },
        {
          name: "ownerAta",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultState",
          isMut: true,
          isSigner: false,
          relations: ["owner"],
        },
        {
          name: "vaultAuth",
          isMut: false,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: "const",
                type: "string",
                value: "auth",
              },
              {
                kind: "account",
                type: "publicKey",
                account: "Vault",
                path: "vault_state",
              },
            ],
          },
        },
        {
          name: "vaultAta",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "associatedTokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "amount",
          type: "u64",
        },
      ],
    },
    {
      name: "depositNft",
      accounts: [
        {
          name: "owner",
          isMut: true,
          isSigner: true,
        },
        {
          name: "ownerAta",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultState",
          isMut: true,
          isSigner: false,
          relations: ["owner"],
        },
        {
          name: "vaultAuth",
          isMut: false,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: "const",
                type: "string",
                value: "auth",
              },
              {
                kind: "account",
                type: "publicKey",
                account: "Vault",
                path: "vault_state",
              },
            ],
          },
        },
        {
          name: "vaultAta",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "nftMetadata",
          isMut: false,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: "const",
                type: "string",
                value: "metadata",
              },
              {
                kind: "account",
                type: "publicKey",
                path: "metadata_program",
              },
              {
                kind: "account",
                type: "publicKey",
                account: "Mint",
                path: "token_mint",
              },
            ],
            programId: {
              kind: "account",
              type: "publicKey",
              path: "metadata_program",
            },
          },
        },
        {
          name: "nftMasterEdition",
          isMut: false,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: "const",
                type: "string",
                value: "metadata",
              },
              {
                kind: "account",
                type: "publicKey",
                path: "metadata_program",
              },
              {
                kind: "account",
                type: "publicKey",
                account: "Mint",
                path: "token_mint",
              },
              {
                kind: "const",
                type: "string",
                value: "edition",
              },
            ],
            programId: {
              kind: "account",
              type: "publicKey",
              path: "metadata_program",
            },
          },
        },
        {
          name: "metadataProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "associatedTokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "withdrawNft",
      accounts: [
        {
          name: "owner",
          isMut: true,
          isSigner: true,
        },
        {
          name: "ownerAta",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultState",
          isMut: true,
          isSigner: false,
          relations: ["owner"],
        },
        {
          name: "vaultAuth",
          isMut: false,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: "const",
                type: "string",
                value: "auth",
              },
              {
                kind: "account",
                type: "publicKey",
                account: "Vault",
                path: "vault_state",
              },
            ],
          },
        },
        {
          name: "vaultAta",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "nftMetadata",
          isMut: false,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: "const",
                type: "string",
                value: "metadata",
              },
              {
                kind: "account",
                type: "publicKey",
                path: "metadata_program",
              },
              {
                kind: "account",
                type: "publicKey",
                account: "Mint",
                path: "token_mint",
              },
            ],
            programId: {
              kind: "account",
              type: "publicKey",
              path: "metadata_program",
            },
          },
        },
        {
          name: "nftMasterEdition",
          isMut: false,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: "const",
                type: "string",
                value: "metadata",
              },
              {
                kind: "account",
                type: "publicKey",
                path: "metadata_program",
              },
              {
                kind: "account",
                type: "publicKey",
                account: "Mint",
                path: "token_mint",
              },
              {
                kind: "const",
                type: "string",
                value: "edition",
              },
            ],
            programId: {
              kind: "account",
              type: "publicKey",
              path: "metadata_program",
            },
          },
        },
        {
          name: "metadataProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "associatedTokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "closeAccount",
      accounts: [
        {
          name: "owner",
          isMut: true,
          isSigner: true,
        },
        {
          name: "closeVaultState",
          isMut: true,
          isSigner: false,
          relations: ["owner"],
        },
        {
          name: "vaultState",
          isMut: true,
          isSigner: false,
          relations: ["owner"],
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
  ],
  accounts: [
    {
      name: "Vault",
      type: {
        kind: "struct",
        fields: [
          {
            name: "owner",
            type: "publicKey",
          },
          {
            name: "authBump",
            type: "u8",
          },
          {
            name: "vaultBump",
            type: "u8",
          },
          {
            name: "score",
            type: "u8",
          },
        ],
      },
    },
  ],
};
