'use strict'

$(document).ready(function () {
  $('#dealForm').submit(function (event) {
    event.preventDefault();

    const firstName = $('#firstName').val();
    const lastName = $('#lastName').val();
    const phone = $('#phone').val();
    const email = $('#email').val();
    const jobType = $('#jobType').val();
    const jobSource = $('#jobSource').val();
    const jobDescription = $('#jobDescription').val();
    const address = $('#address').val();
    const city = $('#city').val();
    const state = $('#state').val();
    const zipCode = $('#zipCode').val();
    const area = $('#area').val();
    const startDate = $('#startDate').val();
    const startTime = $('#startTime').val();
    const endTime = $('#endTime').val();
    const testSelect = $('#testSelect').val();
    const dealId = 3;

    $.ajax({
      url: `https://api.pipedrive.com/v1/deals/${dealId}?api_token=ceb592fc35a2ae551a5a91c8be3afefdc4cd4a94`,
      type: 'PUT',
      contentType: 'application/json',
      data: JSON.stringify({

        "144462cfdaa4683692a5d2b8fc93c6e7bbd48bc3": firstName,
        "0e6274361915e0e2c911af2731b734d8ed2d6645": lastName,
        "47b3e95f155cd5b78ce426bf0ca046a03735b3dd": phone,
        "99a693b119d0255306155a087b73b33c2e21aec1": email,
        "8668cb199bcb5d1db982b89fba6660e2259dfc16": jobType,
        "17268533e5c089cbe388d2986c6aebfb76ab9d1f": jobSource,
        "59684b14a012ef1d765acb74456d59ab121dbf51": jobDescription,
        "f1e45494da4d84fe9e67e7a1863de7109ffddbe3": address,
        "cab10e1037d2cb21c932590322ff30acbb7ed065": city,
        "3e8f0456196954791fa8b5c07fe464ff52f480a2": state,
        "95e4dfd2547c90504cf610290d71b9d37bcdb090": zipCode,
        "a3771420536e9003c20f3d1f35c07e0dc0a59e80": area,
        "4cf83082adc96b5363f3847cb14f3c1e91cafd3f": startDate,
        "eec259e4b5b4a2b286a16b966f2807f962bff20e": startTime,
        "9969eb231ffc7f007a675c7655f29e4f2089d9eb": endTime,
        "b1c78802fb3d33a8cb9becc8cc702fef5646aee2": testSelect,

      }),
      success: function (response) {
        $('#dealForm').hide();
        $('.message').show(); 

        $('#dealForm')[0].reset();
      },
      error: function (xhr) {
        alert('Error: ' + xhr.responseText);
      }
    });
  });
});
