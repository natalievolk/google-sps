// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random fun fact to the page.
 */
function addRandomFunFact() {
  const funFacts =
      ['I\'ve met 10 Olympic medallists! (all figure skaters)', 
      'I got into running at the beginning of covid, and my goal for this summer is to run a half marathon.', 
      'I love dark chocolate!', 
      'I really enjoy going to parks and swinging :)',
      'I\'m a middle child (I have a younger brother and an older sister).'];

  // Pick a random fun fact.
  const funFact = funFacts[Math.floor(Math.random() * funFacts.length)];

  // Add it to the page.
  const funFactContainer = document.getElementById('fun-fact-container');
  funFactContainer.innerText = funFact;
}

/**
 * Shows message from server.
 */
async function showServerMessage() {
    const responseFromServer = await fetch('/welcome');
    const welcomeMessage = await responseFromServer.text();

    const welcomeContainer = document.getElementById('welcome-message');
    welcomeContainer.innerText = welcomeMessage;
}