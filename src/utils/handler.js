class Handler{
    onChange = (value, name, error) => {
        if(name)
        this.setState({
            [name]: value,
            error,
        });
    };

    validation = (data, success, error) => {
        const { error } = data;
        
        const dataKeys = Object.keys(data);
        if (
            !error &&
            dataKeys.filter((state) => state == "error" || !!data[state]).length === dataKeys.length
        ) {
            if(success){
                success();
            }
        } else {
            if(error){
                error();
            }
            Notification.error(
                error || "Please fill in the form correctly."
            );
        }
    };
};

const handler = new Handler();
export default handler;