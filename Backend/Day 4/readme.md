### THA: Read about how internet works and REST alternatives

## How Internet Works ? 
<p>When you open your email, your email application sends a request to your email provider (for example, Gmail) through your laptops's Network Interface Card to your Wireless
  Access Point (WAP) using your local WiFi. The WAP then sends a request through a wire to the local router.</p>
  
<p>The local router took that request and sent it to another router, which then sent to another router, and another router, all the way through a chain of routers until the 
  data was transferred over one of the transatlantic communication cables to the United States. </p>  
  
<p>There, it ended up at a Google data center (because you use Gmail). Google then processed your request to get any new emails that had come in since you last loaded your
  email. They packaged up your new, unread emails in a digital package called a “response,” and sent that package back to the same address (your laptop) that requested the
  updates. The response probably took different routes on the way back, but it went through the same mechanisms.</p>  
  
<p>The data was transferred from the Google data center through multiple lines and reached your home router/modem, which made the data available over your home WiFi. 
  Your laptop’s Network Interface Card received the response, sent it to your email application, and then voilà—your new emails fill up your inbox!</p>  
  
  
  
  ## REST alternatives
  <ol>
  <li>GraphQL APIs</li>
  <ul>
    <li>Based on tree data model.</li>
    <li>The most mature alternative to rest at the moment.</li>
    <li>Clients fetch data from a single endpoint.</li>
    <li>Clients make fewer more efficient requests</li>
    <li>No underfetching or overfetching client requests.</li>
    <li>Easier error handling with verbose error messages.</li>
    <li>Accomodates faster iteration cycles</li>
    <li>Mutations, fragments and type system create high UX.</li>
    <li>Reduces time to market by giving developers most for less.</li>
    <li>Does not take advantage of HTTP caching.</li>
  </ul>
  <li>Falcor APIs</li>
  <li>gRPC APIs</li>
  <li>JSON-Pure APIs</li>
  <li>oData APIs</li>
</ol>
  
