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
};

export type transDetails = {
    hash: string;
    timestamp: number;
    blockNumber: number;
    success: boolean;
    from: string;
    to: string;
    gasLimit: number;
    gasUsed: number;
};
