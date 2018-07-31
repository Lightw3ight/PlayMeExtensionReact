import * as ServerStateActions from '../Store/ServerState/ServerStateActions';
import * as moment from 'moment';

let serverStateInstance;

export class ServerStateService {
    setDispatcher (dispatch, getState ) {
        this.dispatch = dispatch;
        this.getState = getState;
    }

    static get current () {
        return serverStateInstance ? serverStateInstance : serverStateInstance = new ServerStateService();
    }

    get connection () {
        return window['$'].connection;
    }

    openConnection (audioZoneUrl) {
        this.closeConnection();

        let { queueHub } = this.connection;

        this.connection.hub.url = `${audioZoneUrl}/signalr`;
        queueHub.on('updateCurrentTrack', this.onUpdateCurrentTrack);
        queueHub.on('updatePlayingSoon', this.onUpdatePlayingSoon);
        queueHub.on('updateRecentlyPlayed', this.onUpdateRecentlyPlayed);

        return new Promise((resolve, reject) => {
            this.connection.hub.start({ transport: ['webSockets', 'serverSentEvents', 'longPolling'] })
                .done(() => {
                    this.startSockets();
                    resolve();
                });
        });
    }

    closeConnection () {
        let { queueHub } = this.connection;

        if (queueHub) {
            queueHub.off('updateCurrentTrack', this.onUpdateCurrentTrack);
            queueHub.off('updatePlayingSoon', this.onUpdatePlayingSoon);
            queueHub.off('updateRecentlyPlayed', this.onUpdateRecentlyPlayed);
            this.connection.hub.stop();
        }
    }

    likeTrack (trackId) {
        // if (!this._activeLikes.some(id => id === trackId)) {
        //     this._activeLikes.push(trackId);
        //     this._karmaService.addKarma();
        // }
        this.connection.queueHub.server.likeTrack(trackId);
    }

    vetoTrack (trackId) {
        // if (!this._activeVetos.some(id => id === trackId)) {
        //     this._activeVetos.push(trackId);
        //     this._karmaService.removeKarma();
        // }
        this.connection.queueHub.server.vetoTrack(trackId);
    }

    // private cleanVetoLikeLog () {
    //     const removeUnused = (opinionList: string[], activeTracks: IQueuedTrack[]) => {
    //         for (let i = opinionList.length - 1; i >= 0; i--) {
    //             const id = opinionList[i];

    //             if (!activeTracks.some(t => t.Id === id)) {
    //                 opinionList.splice(i, 1);
    //             }
    //         }
    //     };

    //     return Observable.combineLatest(
    //         this.getNowPlaying(),
    //         this.getNextUp()).pipe(
    //             take(1),
    //             map(([nowPlaying, upNext]) => {
    //                 return [nowPlaying, ...upNext];
    //             })
    //         ).subscribe(tracks => {
    //             removeUnused(this._activeLikes, tracks);
    //             removeUnused(this._activeVetos, tracks);
    //         });
    // }

    // getRecentlyPlayed () {
    //     return this._recentlyPlayed$.asObservable();
    // }

    // getNextUp () {
    //     return this._upNext$.asObservable();
    // }

    // getNowPlaying () {
    //     return this._nowPlaying$.asObservable();
    // }

    onUpdateCurrentTrack = (track) => {
        // this._queueService.parseQueuedTrack(track);
        track = parseQueuedTrack(track);
        this.dispatch(ServerStateActions.nowPlayingChanged(track));
        // this.cleanVetoLikeLog();
    }

    onUpdatePlayingSoon = (data) => {
        let tracks = data.map(t => parseQueuedTrack(t));
        // data.forEach(t => this._queueService.parseQueuedTrack(t));
        this.dispatch(ServerStateActions.playingSoonChanged(tracks));
        // this._upNext$.next(data);
        // this.cleanVetoLikeLog();
    }

    onUpdateRecentlyPlayed = (data) => {
        let tracks = data.PageData.map(t => parseQueuedTrack(t));
        // data.PageData.forEach(t => this._queueService.parseQueuedTrack(t));
        this.dispatch(ServerStateActions.recentlyPlayedChanged(tracks));
        // this._recentlyPlayed$.next(data.PageData);
    }

    startSockets () {
        let { queueHub } = this.connection;

        queueHub.server.getCurrentTrack();
        queueHub.server.getPlayingSoon();
        queueHub.server.getRecentlyPlayed();
        queueHub.server.getCurrentVolume();
    }
}


function parseQueuedTrack (queueItem) {
    queueItem.StartedPlayingDateTime = queueItem.StartedPlayingDateTime ? moment(queueItem.StartedPlayingDateTime).toDate() : null;
    queueItem.fullName = queueItem.User;//this._userInfoService.getUserFullName(queueItem.User);
    queueItem.userId = queueItem.User;//this._userInfoService.parseUserId(queueItem.User);
    queueItem.url = queueItem['userId'] ? `http://guesswho/#${queueItem['userId']}` : null;
    queueItem.userPhotoUrl = queueItem['userId'] ? `http://guesswho/StaffPhoto.ashx?userId=${queueItem['userId']}` : null;

    queueItem.Likes.forEach(l => {
        const uid = l.ByUser;//this._userInfoService.parseUserId(l.ByUser);
        l.url = uid ? `http://guesswho/#${uid}` : null;
        l.fullName = l.ByUser;//this._userInfoService.getUserFullName(l.ByUser);
        l.userPhotoUrl = uid ? `http://guesswho/StaffPhoto.ashx?userId=${uid}` : null;
    });

    queueItem.Vetoes.forEach(l => {
        const uid = l.ByUser;//this._userInfoService.parseUserId(l.ByUser);
        l.url = uid ? `http://guesswho/#${uid}` : null;
        l.fullName = l.ByUser;//this._userInfoService.getUserFullName(l.ByUser);
        l.userPhotoUrl = uid ? `http://guesswho/StaffPhoto.ashx?userId=${uid}` : null;
    });
    return queueItem;
}