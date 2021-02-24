export type transDetailsApi = {
    hash: string;
    timestamp: number;
    blockNumber: number;
    success: boolean;
    from: string;
    to: string;
    gasLimit: number;
    gasUsed: number;
    value: number;
    confirmations: number;
};

export type transDetails = {
    hash: string;
    timestamp: number;
    blockNumber: string;
    success: boolean;
    from: string;
    to: string;
    gasLimit: string;
    gasUsed: string;
    gasProc: string;
    confirmations: string;
};
