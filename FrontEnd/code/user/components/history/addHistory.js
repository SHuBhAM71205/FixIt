async function fetchData() {
    try {
        const response = await fetch('your-api-endpoint'); 
        const data = await response.json();

        if (!data || data.length === 0) {  
            document.querySelector('.no-history').style.display = 'block';
            document.querySelector('.no-history').style.display = 'block';
            document.querySelector('.trackHistory').style.display = 'none';

        } else {
            document.querySelector('.no-history').style.display = 'none';

            const progress = document.querySelector('.requested-task-progress');
            if (progress) {
                progress.innerHTML = '';

                const progressElement = document.createElement('progress');
                progressElement.value = 50;
                progressElement.max = 100; 
                progress.appendChild(progressElement);
            }
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        document.querySelector('.no-history').style.display = 'block';
        document.querySelector('.trackHistory').style.display = 'none';

    }
}

fetchData();


