function CurrentDate() {
    // JavaScript code for getting the current date
    const currentDate = new Date();

    // You can customize the date format here
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    // Format the date as per the options
    const formattedDate = currentDate.toLocaleDateString(undefined, options);

    return (
        <div>
            <h2>Today's Date</h2>
            <p>{formattedDate}</p>
        </div>
    );
}

export default CurrentDate;