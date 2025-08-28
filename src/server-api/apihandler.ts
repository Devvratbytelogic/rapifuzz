import { IAllImageAPIResponse } from '@/types/images';


async function pageAPIHandler(end_point: string) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com${end_point}`, {
            cache: 'no-store',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if (!response.ok) {
            const error_message = `API: ${end_point}, Error: Failed to fetch data, status: ${response.status}`;
            console.error('Server', error_message);
            throw new Error(error_message);
        }

        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
            const data: IAllImageAPIResponse[] = await response.json();
            return data;
        } else {
            const nonJsonResponse = await response.text();
            console.error('Non-JSON response:', nonJsonResponse);
            throw new Error('Received non-JSON response');
        }
    } catch (error) {
        console.error(`API: ${end_point}, Catch Block, Error fetching data: ${error}`);
        return []; 
    }
}

export const getImagesData = async (): Promise<IAllImageAPIResponse[]> => {
    return pageAPIHandler(`/photos?_limit=100`);
};