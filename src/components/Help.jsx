import Head from "./Head.jsx";

export default function Help() {
    return(
        <>
            <Head/>
            <div className="main-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 align-self-center">
                            <div className="caption header-text">
                                <h6>Have a problem with one of the games?</h6>
                                <h2>Our top tips to resolve problems with games not running is:</h2>
                                <p>1. Make sure your anti-virus AND windows defender is disabled before downloading and
                                    extracting the .zip file.
                                    Why? Because most of the time, the crack files are detected as a false positive and
                                    are sent to the vault so you aren’t able to run the game. If you already downloaded
                                    a large file sized game, and don’t want to re-download it again, go to your windows
                                    defender vault / anti-virus and make sure to restore the crack file from the vault.
                                    We highly recommend disabling anti-virus software before downloading games to avoid
                                    headache.</p>
                                <p>2. Make sure you have all the required programs installed before playing the game.
                                    How do you know what you need? Check for a _CommonRedist or Redist folder and
                                    install all the applications: DirectX, vcredist, DotNet, etc..
                                    After you’ve installed all those, 90% of the missing dll errors will resolve and you
                                    can run the game.</p>
                                <p>3. Always run the game as administrator.
                                    This solves the problem of the “Game not saving”.
                                    To do this, right click on the game and click “Run as administrator”.</p>
                                <p>
                                <span style={{color: "#ff0000"}}>
                                    <strong>
                                        Notice: If you are getting a hotlink protection error, this is because you clicked the uploadhaven link from a different source other than SteamUnlocked.
                                        You must download the game from the original SteamUnlocked site.
                                        Copying & Pasting the download link directly onto a new window/tab will also lead to this error.
                                        Also, the Brave Browser is not supported and will lead to a Hotlink Protection error too.
                                    </strong>
                                </span></p>
                                <p>**JDownloader users:**</p>
                                <p>Due to the new hotlink protection in place, you may notice Jdownloader isn’t fetching
                                    the link correctly.
                                    Instead of copying/pasting the “uploadhaven.com/” URL, you need to copy the exact
                                    URL after the download starts.</p>
                                <p>What we recommend is starting the download regularly on a browser, then pressing Ctrl
                                    J on your keyboard.
                                    From there, you can copy and paste the direct download link, then place that link
                                    into JDownloader and even Free Download Manager.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="container-fluid">
                    <div className="container">
                        <div className="col-lg-12">
                            <p>Copyright © 2024 ZONE. All rights reserved. &nbsp;&nbsp;</p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}