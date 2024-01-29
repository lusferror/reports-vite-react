const getState = ({ getStore, getActions, setStore }) => {
    return {
        //All General States
        store: {
            loading: false,
        },
        //All General Functions
        actions: {

            /**
             * This function is used for spinner loading
             */
            windowLoading(value){
                setStore({loading: value})
            }
            
        }
    }
}

export default getState