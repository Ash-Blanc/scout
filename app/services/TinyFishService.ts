import axios from 'axios'

export interface TinyFishAutomationResponse {
    success: boolean;
    data?: any;
    error?: string;
    logs?: string[];
}

/**
 * TinyFish Web Automation Service
 * 
 * This service provides a natural language interface to browse the web,
 * extract information, and perform complex browser-based tasks.
 */
export class TinyFishService {
    private apiKey: string;
    private baseUrl = 'https://agent.tinyfish.ai/v1';

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    /**
     * Execute a web automation task using natural language.
     * 
     * @param goal The natural language goal (e.g., "Find the cheapest RTX 4090 on this site")
     * @param url The starting URL for the task
     * @returns The result of the automation task
     */
    public async runAutomation(goal: string, url: string): Promise<TinyFishAutomationResponse> {
        try {
            const response = await axios.post(`${this.baseUrl}/automation/run`, {
                goal,
                url
            }, {
                headers: {
                    'Authorization': `Bearer ${this.apiKey}`,
                    'Content-Type': 'application/json'
                }
            });

            return {
                success: true,
                data: response.data
            };
        } catch (error: any) {
            console.error('TinyFish Automation Error:', error.response?.data || error.message);
            return {
                success: false,
                error: error.response?.data?.message || error.message,
                logs: error.response?.data?.logs
            };
        }
    }

    /**
     * Extract structured data from a specific URL.
     * 
     * @param url The URL to extract data from
     * @param schema The natural language description of the data to extract (e.g., "Product names and prices as a list")
     */
    public async extractData(url: string, schema: string): Promise<any> {
        return this.runAutomation(`Extract the following data: ${schema}`, url);
    }
}
