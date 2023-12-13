// Save this as prayer_times_script.js
function fetchPrayerTimes() {
    const city = $('#city').val();
    const country = $('#country').val();

    const apiUrl = `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=2&school=0&apikey=${apiKey}`;

    $.ajax({
        url: apiUrl,
        method: 'GET',
        success: function (data) {
            const timings = data.data.timings;
            const prayerTimesTable = `
                <table>
                    <tr>
                        <th>Prayer</th>
                        <th>Time</th>
                    </tr>
                    <tr>
                        <td>Fajr</td>
                        <td>${timings.Fajr}</td>
                    </tr>
                    <tr>
                        <td>Dhuhr</td>
                        <td>${timings.Dhuhr}</td>
                    </tr>
                    <tr>
                        <td>Asr</td>
                        <td>${timings.Asr}</td>
                    </tr>
                    <tr>
                        <td>Maghrib</td>
                        <td>${timings.Maghrib}</td>
                    </tr>
                    <tr>
                        <td>Isha</td>
                        <td>${timings.Isha}</td>
                    </tr>
                </table>
            `;
            $('#prayerTimesInfo').html(prayerTimesTable);
        },
        error: function () {
            $('#prayerTimesInfo').html('Failed to fetch prayer times.');
        }
    });
}
