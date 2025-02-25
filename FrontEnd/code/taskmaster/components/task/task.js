async function fetchData() {
    try {
        const response = await fetch('your-api-endpoint'); 
        const data = await response.json();

        if (!data || data.length === 0) {  
            document.querySelector('.no-task').style.display = 'block';
            document.querySelector('.no-task').style.display = 'block';
            document.querySelector('.trackTask').style.display = 'none';

        } else {
            document.querySelector('.no-task').style.display = 'none';

            const progress = document.querySelector('.trackTask');
            if (progress) {
                progress.innerHTML = '';

                const progressElement = document.createElement(progress);
                progressElement.value = 50;
                progressElement.max = 100; 
                progress.appendChild(progressElement);
            }
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        document.querySelector('.no-task').style.display = 'block';
        document.querySelector('.trackTask').style.display = 'none';

    }
}

fetchData();


