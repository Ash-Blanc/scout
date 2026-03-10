export interface MissionStep {
    id: string;
    strategy: string;
    action: string;
    outcome: string;
    status: 'pending' | 'running' | 'completed' | 'failed';
    timestamp: number;
}

export interface Mission {
    url: string;
    goal: string;
    status: 'idle' | 'scouting' | 'reporting';
    steps: MissionStep[];
    finalReport?: string;
}
