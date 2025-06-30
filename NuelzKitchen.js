    function submitOrder(){
        const food = document.getElementById('food').value;
        const quantity = document.getElementById('quantity').value;
        const location = document.getElementById('delivery').value;
        if(location.trim()===''){
            alert('please enter a delievery location'); 
        } else {
            alert(`Order placed: ${quantity} x ${food} to ${location}`);
        }
    }
        function showPopup() {
      document.getElementById("feedbackPopup").style.display = "block";
    }

    function hidePopup() {
      document.getElementById("feedbackPopup").style.display = "none";
    }