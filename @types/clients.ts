export interface Client {
    id: number;
    name: string;
    manager: string;
    email: string;
    phone: string;
    address: string;
    region: string;
    wasteType: 'óleo' | 'gordura fina' | 'gordura média' | 'gordura grossa' | 'resíduo' | 'água';
    payment: string;
    lastCollection: Date;
    daysToNextCollection: number;
    observation: string;
}