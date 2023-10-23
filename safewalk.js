(function () {
  var safewalkEnabled = false;

  function update() {
    if (safewalkEnabled) {
      sendPacketInput({
        strafeSpeed: 0,
        forwardSpeed: 0,
        jumping: false,
        sneaking: true,
        preventDefault: false
      });
    } else {
      sendPacketInput({
        strafeSpeed: 0,
        forwardSpeed: 0,
        jumping: false,
        sneaking: false,
        preventDefault: false
      });
    }
  }

  function toggleSafewalk() {
    safewalkEnabled = !safewalkEnabled;
    var status = safewalkEnabled ? "enabled" : "disabled";
    PluginAPI.displayToChat({ msg: "Safewalk mode " + status + "." });
    update();
  }

  PluginAPI.addEventListener("sendchatmessage", function (ev) {
    var message = ev.message.toLowerCase().trim();
    if (message === ".safe") {
      ev.preventDefault = true;
      toggleSafewalk();
    }
  });

  update();
})();
