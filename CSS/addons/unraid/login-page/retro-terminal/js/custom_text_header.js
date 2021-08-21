 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// You must escape any backward slashes. "\\"

let custom_text_header = `
<div class="custom-text-header"> <pre>   __________  __  ______  ____     _   ___   ____________ 
  / ____/ __ \/ / / / __ \/ __ \   / | / / | / /_  __/ __ \
 / / __/ /_/ / / / / /_/ / / / /  /  |/ /  |/ / / / / /_/ / //_/
/ /_/ / _, _/ /_/ / ____/ /_/ /  / /|  / /|  / / / / _, _/ ,&lt; 
\____/_/ |_|\____/_/    \____/  /_/ |_/_/ |_/ /_/ /_/ |_|  |_|
                                                              </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
