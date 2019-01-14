import React, { Component } from 'react';
import './App.css';

import PageNotFound from './Component/PageNotFound'

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageNotFound
        image={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAASFBMVEXMzMx1dXVycnLPz89vb2/Jycmurq6WlpaCgoKhoaGRkZGampp/f396enq8vLzCwsLFxcW+vr6MjIyysrKmpqZra2u2trbV1dVYun5lAAADBklEQVR4nO3Y3ZKjIBCGYaExomhAE5P7v9PtRifJZmsPZ1I1vs9Byt+q8BVgQ9MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPBbSPVy/H7x7wfl/y8dwHUZx+W0tfZkztr+8/C8uJPbEMc4XKQed3rcFz2WWQ+X6yf++Y9rp+BVWKzdtzWEsPYi/XZxfHlQrvWaD700+33vziKn7dGpfKwJP0YW73wfnQvajWTwzump5NW5Melh99K3Rj1P9mSRW3B+SfpmlKJvTL3eWn7/SGyDxtJY7xikaZ2rYd2vlmA76UlTSmnrT7Z7Te8t1s5+7/qSKxfNbRANMrSfbsu3yzWsW4yx0xHlXaxhpUdYswvrVdawDo+w/NW6o4alL8VsuXZiHW7+dFu+3VzDynN7FxuSU43pPjzCyoP3nSYaTrNOZ772rC2sSztnuUv/COv868fhWcOKnQ9Op+2izf4nLB2hUYeam5ucc2ksplwnujQGv5SXsG6HCMsFndfDRb9r4dK9h5X1ngZSv4sy2aWbWFhOA7ZZ/XBhzRZRd198aN/DmhvNIe6fRVnta7lsn9A020k5Wlj2NdROoqNwvP8TlqRaTlhhIXLtfC0ytgneulc+aFg6O3VNjUlewzrVsM6SU0rbnURYtci02cuFoXsJ66tQna1ir6WDDdhDhjU/w+q92/juGVa2wn2ymXx+1FnDUcPKj7CGZIu8GtbwLEqLfQ1t2irPojS9hvUsSs+fbsu3s+XO1FiL00UnJVv7+Xh6Lne0nnDxVGvQelor+PoZqGFty53uIMudvb6sdZbav4ZFF9Ix1RGnFfxwtkDu0fqYPrnOtpC2UtZGZ/u1kI6/fhQ2Tdm3aLb9BRm2LZrrvu/StpOdr0EPs9u2aJJWEWm/nxu57Ls1+dMt+QHS9svXlp667Zt/daOvb6XV8yy2JajHfRzHr82//f6++RdTOUDHat53kN+3levv8/jo28oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgCP4A6F+IE8bVKvLAAAAAElFTkSuQmCC"}
        imageName={"placeholder"}/>
        <h1>
          409
        </h1>
        <h2>
          Conflict
        </h2>
      </div>
    );
  }
}

export default App;
