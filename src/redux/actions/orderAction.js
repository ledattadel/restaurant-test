import { postDataAPI } from '@/utils/fetchData';

export const getAllOrder = async () => {
    try {
        const res = await postDataAPI('order/search', {});

        return res.data.data;
    } catch (err) {
        console.log('err getAllOrder', err);
    }
};
