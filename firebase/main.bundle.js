webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_Campaign__ = __webpack_require__("../../../../../src/app/model/Campaign.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_constants__ = __webpack_require__("../../../../../src/app/model/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_service_fundraiser_service__ = __webpack_require__("../../../../../src/app/service/fundraiser.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(fundraiserService) {
        this.fundraiserService = fundraiserService;
        this.contractAddr = __WEBPACK_IMPORTED_MODULE_2__model_constants__["a" /* Constants */].CONTRACT_ADDRESS;
        this.defaultNodeIP = __WEBPACK_IMPORTED_MODULE_2__model_constants__["a" /* Constants */].DEFAULT_NODEIP;
        this.nodeConnected = true; // If we've established a connection yet
        this.adding = false; // If we're adding a question
        this.noOfCampaigns = 0;
        this.ABI = __WEBPACK_IMPORTED_MODULE_2__model_constants__["a" /* Constants */].CONTRACT;
        this.campaign = new __WEBPACK_IMPORTED_MODULE_1__model_Campaign__["a" /* Campaign */]();
        this.isWeb3Available = false;
        this.accountAddress = '0x48A105d092dCD56735CA052EA3c82ebfaB367f9b';
        this.accountPassword = 'ether123#';
    }
    AppComponent.prototype.ngOnInit = function () {
        /* console.log(window['web3']);
         console.log(Web3);
     
         if (typeof window['web3'] !== 'undefined' && typeof window['Web3'] !== 'undefined') {
           console.log("Using web3 detected from external source like Metamask")
           this.web3 = new this.Web3(window['web3'].currentProvider)
           this.isWeb3Available = true;
           const tokenContract = this.web3.eth.contract(this.ABI);
           this.web3Instance = tokenContract.at(this.contractAddr);
           console.log(this.web3Instance)
           console.log(this.web3.eth)
           console.log(this.web3.eth.personal)
           console.log(this.web3.eth.getAccounts())
     
           //  console.log(this.web3.eth.accounts)
           // this.getBalanceOf('0x9831b22d110D694c0a10651D82D856b453cEA00d');
           this.getCampaigns();
     
     
           console.log(tokenContract);
         } else {
           console.log("No web3 detected. Falling back to http://localhost:8545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
           this.web3 = new Web3(new Web3.providers.HttpProvider(this.defaultNodeIP))
           this.isWeb3Available = false;
     
           console.log(this.web3);
           console.log(this.web3.eth);
           console.log(this.web3.eth.accounts);
           this.web3Instance = new this.web3.eth.Contract(this.ABI, this.contractAddr);
     
           console.log(this.web3Instance);
           // console.log(this.     web3.eth.accounts.wallet.load('ether123#') );
     
           this.web3Instance.methods.numCampaigns().call((err, res) => {
             console.log(err, res);
             this.noOfCampaigns = res;
     
           });
           this.web3Instance.methods.campaigns(1).call((err, res) => {
             console.log(err, res);
             this.campaigns = res;
           });
     
         }*/
        var _this = this;
        this.fundraiserService.numOfCampaign().subscribe(function (res) {
            console.log(res);
            _this.noOfCampaigns = res;
        }, function (err) { return _this.OnError(err); });
    };
    AppComponent.prototype.OnError = function (err) {
        console.log(err);
    };
    AppComponent.prototype.getCampaigns = function () {
        /* this.web3Instance.campaigns(1, (err, res) => {
           console.log(err, res);
           this.campaigns = res;
         });
         this.web3Instance.numCampaigns((err, res) => {
           console.log(err, res);
           this.noOfCampaigns = res;
         });*/
    };
    AppComponent.prototype.search = function () {
        var _this = this;
        console.log(this.campaignId);
        // if (this.isWeb3Available) {
        //   this.web3Instance.campaigns(this.campaignId, (err, res) => {
        //     console.log(err, res);
        //     this.campaigns = res;
        //   });
        // } else {
        //   this.web3Instance.methods.campaigns(this.campaignId).call((err, res) => {
        //     console.log(err, res);
        //     this.campaigns = res;
        //   });
        // }
        this.fundraiserService.search(this.campaignId).subscribe(function (res) {
            console.log(res);
            _this.campaigns = res;
        });
    };
    AppComponent.prototype.unLockAccount = function () {
        // console.log(this.web3.eth.personal)
        //  this.web3.eth.personal.unlock();
        /**@TODO
         * validate,
         *
         */
        return this.web3.eth.personal.unlockAccount(this.accountAddress.trim(), this.accountPassword.trim(), 1500);
    };
    AppComponent.prototype.lockAccount1 = function () {
        //   console.log("acc ",this.accountAddress);
        //   console.log("pwd ",this.accountPassword);
        //   console.log(this.web3.eth.personal)
        // //  this.web3.eth.personal.unlock();
        //  let lock = this.web3.eth.personal.lockAccount(this.accountAddress,this.accountPassword);
        //  console.log("lock ",lock);
    };
    AppComponent.prototype.addNewCampaign = function () {
        /**@TODO
         * validate,
         *
         */
        /*if (this.isWeb3Available) {
          this.web3Instance.newCampaign(this.campaign.beneficiary, this.campaign.fundingGoal,
            this.campaign.durationInMin, this.campaign.detailsUrl, this.campaign.category, (err, res) => {
              console.log(err, res);
              this.campaigns = res;
            });
        } else {
          // console.log(this.web3);
          // console.log(this.web3.eth)
          // console.log(this.web3.eth.accounts)
    
          // console.log(this.campaign);
          this.unLockAccount().then(res => {
            console.log(res);
            if (res) {
              this.web3Instance.methods.newCampaign(this.campaign.beneficiary, this.campaign.fundingGoal,
                  this.campaign.durationInMin, this.campaign.detailsUrl, this.campaign.category).send({
                  from: this.accountAddress,
                  gas: Constants.GAS_NEW_CAMPAIGN
                }).on('transactionHash', function (hash) {
                  console.log("hash ", hash);
                  // this.lockAccount();
                })
                .on('receipt', function (receipt) {
                  console.log("receipt ", receipt);
                })
                .on('confirmation', function (confirmationNumber, receipt) {
                  console.log("confirmation no ", confirmationNumber);
                  console.log("receipt ", receipt);
                })
                .on('error', console.error);
            } else {
              alert('invalid password')
            }
          }).catch(err => console.log(err))
        }*/
    };
    AppComponent.prototype.contribute = function () {
        var _this = this;
        /**@TODO
         * validate is deadline gone ,
         * is available
         */
        if (this.isWeb3Available) {
            this.web3Instance.newCampaign(this.campaign.beneficiary, this.campaign.fundingGoal, this.campaign.deadline, this.campaign.detailsUrl, this.campaign.category, function (err, res) {
                console.log(err, res);
                _this.campaigns = res;
            });
        }
        else {
            this.unLockAccount().then(function (res) {
                console.log(res);
                if (res) {
                    _this.web3Instance.methods.contribute(_this.campaignId).send({
                        from: _this.accountAddress,
                        gas: __WEBPACK_IMPORTED_MODULE_2__model_constants__["a" /* Constants */].GAS_CONTRIBUTE
                    })
                        .on('transactionHash', function (hash) {
                        console.log("hash ", hash);
                        //this.lockAccount();
                    })
                        .on('receipt', function (receipt) {
                        console.log("receipt ", receipt);
                    })
                        .on('confirmation', function (confirmationNumber, receipt) {
                        console.log("confirmation no ", confirmationNumber);
                        console.log("receipt ", receipt);
                    })
                        .on('error', console.error);
                }
                else {
                    alert('invalid password');
                }
            }).catch(function (err) { return console.log(err); });
        }
    };
    AppComponent.prototype.withdraw = function () {
        var _this = this;
        /**@TODO
         * validate is deadline gone ,
         * is available
         */
        if (this.isWeb3Available) {
            this.web3Instance.newCampaign(this.campaign.beneficiary, this.campaign.fundingGoal, this.campaign.deadline, this.campaign.detailsUrl, this.campaign.category, function (err, res) {
                console.log(err, res);
                _this.campaigns = res;
            });
        }
        else {
            this.unLockAccount().then(function (res) {
                console.log(res);
                if (res) {
                    _this.web3Instance.methods.safeWithdrawal(_this.campaignId).send({
                        from: _this.accountAddress,
                        gas: __WEBPACK_IMPORTED_MODULE_2__model_constants__["a" /* Constants */].GAS_WITHDRAW
                    })
                        .on('transactionHash', function (hash) {
                        console.log("hash ", hash);
                        //this.lockAccount1();
                    })
                        .on('receipt', function (receipt) {
                        console.log("receipt ", receipt);
                    })
                        .on('confirmation', function (confirmationNumber, receipt) {
                        console.log("confirmation no ", confirmationNumber);
                        console.log("receipt ", receipt);
                    })
                        .on('error', console.error);
                }
                else {
                    alert('invalid password');
                }
            }).catch(function (err) { return console.log(err); });
        }
    };
    Object.defineProperty(AppComponent.prototype, "Web3", {
        /*
          intializeWeb3(): void {
            this.nodeIP = localStorage['nodeIP'] || this.defaultNodeIP;
            this.connectToNode(); // Connect to whatever's available
        }
        
          connectToNode(): void { // Don't unlock until you send a transaction
          if (typeof window['web3'] !== 'undefined' && (!localStorage['nodeIP'] || this.nodeIP === 'MetaMask')) {
              localStorage['nodeIP'] = this.nodeIP;
              console.log('Using injected web3');
              this.web3 = new this.Web3(window['web3'].currentProvider);
              this.nodeIP = 'MetaMask';
              this.nodeConnected = true;
              this.unlockedAccount = 'MetaMask';
              //this.update.emit(null);
          } else {
              localStorage['nodeIP'] = this.nodeIP;
              console.log('Using HTTP node');
              this.unlockedAccount = undefined;
              this.web3 = new this.Web3(new this.Web3.providers.HttpProvider(this.nodeIP));
              this.handleConnection(this.web3.isConnected());
          }
        }
        handleConnection(connect: boolean): void {
          if (connect) {
              this.connected();
          } else {
              this.nodeIP = this.defaultNodeIP;
              this.connectToNode();
          }
          this.nodeConnected = connect;
        }
          get isConnected(): boolean {
            return this.nodeConnected;
        }
        
        weiToEth(wei: number): number {
          return parseFloat(this.web3.fromWei(wei, 'ether'));
        }
        
        connected(): Promise<any> {
          let p = new Promise<any>((resolve, reject) => {
              if (this.nodeIP !== 'MetaMask') {
                  this.web3.eth.sendTransaction({from: this.web3.eth.accounts[0], to: this.web3.eth.accounts[0], value: 0, gas: 0, gasPrice: 0 },
                      (err, res) => {;
                          if (err.toString() !== 'Error: account is locked') {
                              this.unlockedAccount = this.web3.eth.accounts[0];
                              //this.update.emit(null);
                              console.log('Connected to account: ' + this.unlockedAccount);
                              resolve(true);
                          } else {
                              console.log('Error: Could not find an unlocked account');
                              resolve(false);
                          }
                      }
                  );
              } else {
                  this.unlockedAccount = this.web3.eth.accounts[0];
                  console.log('Connected to account: ' + this.unlockedAccount);
                  resolve(false);
              }
          });
          return p;
        }
        
        get web3(): any {
            if (!this.web3Instance) {
                this.intializeWeb3();
            }
            return this.web3Instance;
        }
        set web3(web3: any) {
            this.web3Instance = web3;
        }
        
        get currentAcc(): string {
            return this.unlockedAccount;
        }
        get currentAddr(): string {
            return this.contractAddr;
        }
        set currentAddr(contractAddr: string) {
            if (contractAddr.length === 42 || contractAddr.length === 40) {
                this.contractAddr = contractAddr;
            } else {
                console.log('Invalid address used');
            }
        }
        get currentNode(): string {
            return this.nodeIP;
        }
        set currentNode(nodeIP: string) {
            this.nodeIP = nodeIP;
        }
        */
        get: function () {
            return window['Web3'];
        },
        enumerable: true,
        configurable: true
    });
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_app_service_fundraiser_service__["a" /* FundraiserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_service_fundraiser_service__["a" /* FundraiserService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_service_fundraiser_service__ = __webpack_require__("../../../../../src/app/service/fundraiser.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_component_withdraw_withdraw_component__ = __webpack_require__("../../../../../src/app/component/withdraw/withdraw.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_component_contribute_contribute_component__ = __webpack_require__("../../../../../src/app/component/contribute/contribute.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_component_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/component/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_component_new_campaign_new_campaign_component__ = __webpack_require__("../../../../../src/app/component/new-campaign/new-campaign.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_component_display_display_component__ = __webpack_require__("../../../../../src/app/component/display/display.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__component_team_team_component__ = __webpack_require__("../../../../../src/app/component/team/team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_service_util_service__ = __webpack_require__("../../../../../src/app/service/util.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__component_sign_in_sign_in_component__ = __webpack_require__("../../../../../src/app/component/sign-in/sign-in.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6_app_component_contribute_contribute_component__["a" /* ContributeComponent */],
            __WEBPACK_IMPORTED_MODULE_7_app_component_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_9_app_component_display_display_component__["a" /* DisplayComponent */],
            __WEBPACK_IMPORTED_MODULE_8_app_component_new_campaign_new_campaign_component__["a" /* NewCampaignComponent */],
            __WEBPACK_IMPORTED_MODULE_5_app_component_withdraw_withdraw_component__["a" /* WithdrawComponent */],
            __WEBPACK_IMPORTED_MODULE_10__component_team_team_component__["a" /* TeamComponent */],
            __WEBPACK_IMPORTED_MODULE_13__component_sign_in_sign_in_component__["a" /* SignInComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_11_app_app_routing__["a" /* AppRouting */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4_app_service_fundraiser_service__["a" /* FundraiserService */], __WEBPACK_IMPORTED_MODULE_4_app_service_fundraiser_service__["a" /* FundraiserService */], __WEBPACK_IMPORTED_MODULE_12_app_service_util_service__["a" /* UtilService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/component/dashboard/dashboard.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouting; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var appRoutes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__component_dashboard_dashboard_component__["a" /* DashboardComponent */]
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__component_dashboard_dashboard_component__["a" /* DashboardComponent */]
    },
    {
        path: '**', redirectTo: '/'
    }
];
var AppRouting = (function () {
    function AppRouting() {
    }
    return AppRouting;
}());
AppRouting = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(appRoutes, {
                useHash: true
            })],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
    })
], AppRouting);

//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/component/contribute/contribute.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/contribute/contribute.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n  <div class=\"card\">\n      <h5 class=\"card-header\">Contribute</h5>\n      <div class=\"card-body\">\n        <form>\n  \n          <div class=\"form-group\">\n            <label for=\"exampleFormControlInput1\">Campaign Id</label>\n            <input type=\"number\" class=\"form-control\" name=\"campaignId\" [(ngModel)]=\"campaignId\" placeholder=\"Campaign Id - 1\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleFormControlInput1\">Contribute in Ether</label>\n            <input type=\"text\" class=\"form-control\" name=\"contributeValue\" [(ngModel)]=\"contributeValue\" placeholder=\"1000\">\n          </div>\n          <button type=\"submit\" class=\"btn btn-info\" (click)=\"contribute()\">Contribute</button>\n        </form>\n  \n      </div>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/component/contribute/contribute.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_service_fundraiser_service__ = __webpack_require__("../../../../../src/app/service/fundraiser.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContributeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContributeComponent = (function () {
    function ContributeComponent(fundraiserService) {
        this.fundraiserService = fundraiserService;
    }
    ContributeComponent.prototype.ngOnInit = function () {
    };
    ContributeComponent.prototype.contribute = function () {
        /**@TODO
         * validate is deadline gone ,
         * is available
         */
        this.fundraiserService.contribute(this.campaignId, this.contributeValue).subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err);
        });
    };
    return ContributeComponent;
}());
ContributeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-contribute',
        template: __webpack_require__("../../../../../src/app/component/contribute/contribute.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/contribute/contribute.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_service_fundraiser_service__["a" /* FundraiserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_service_fundraiser_service__["a" /* FundraiserService */]) === "function" && _a || Object])
], ContributeComponent);

var _a;
//# sourceMappingURL=contribute.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"particles-js\"></div> \n<div class=\"container\">\n    <app-display></app-display>\n    <app-sign-in></app-sign-in>\n\n    <app-new-campaign></app-new-campaign>\n    <app-contribute></app-contribute>\n    <app-withdraw></app-withdraw>\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/component/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/display/display.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/display/display.component.html":
/***/ (function(module, exports) {

module.exports = "{{noOfCampaigns}}\n\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <input type=\"number\" class=\"form-control\" name=\"campaignId\" [(ngModel)]=\"campaignId\" placeholder=\"Campaign Id - 1\">\n    </div>\n    <div class=\"col-md-6\">\n      <button class=\"btn btn-info\" (click)=\"search()\">Search</button>\n    </div>\n  </div>\n<div *ngIf=\"campaigns.length>0\">\n  <div class=\"row\">\n    <div class=\"col-sm-4\"  *ngFor=\"let camp of campaigns\">\n      <div class=\"card\" style=\"width: 18rem;\">\n        <img class=\"card-img-top\" src=\"http://lorempixel.com/400/200\" alt=\"random pic\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\"></h5>\n          <p class=\"card-text\">\n            id: {{camp.id}}\n           <br> Beneficiary: {{ camp.beneficiary}}\n          <br/>  fundingGoal: {{ camp.fundingGoal}}\n          <br/>  deadline: {{ camp.deadline*1000 | date: 'medium'}}\n          <br/>  detailsUrl:  <a [href]=\"camp.detailsUrl\"> {{ camp.detailsUrl }}</a>\n          <br/>  category: {{ camp.category }}\n          <br/>  numFunders: {{ camp.numFunders }}\n          <br/> amountRaised: {{  camp.amountRaised }}\n          <br/>  isWithdrawn: {{  camp.isWithdrawn }}\n          </p>\n          <a href=\"#\" class=\"btn btn-primary\">Invest</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/display/display.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_model_Campaign__ = __webpack_require__("../../../../../src/app/model/Campaign.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_service_fundraiser_service__ = __webpack_require__("../../../../../src/app/service/fundraiser.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DisplayComponent = (function () {
    function DisplayComponent(fundraiserService) {
        this.fundraiserService = fundraiserService;
        this.noOfCampaigns = 0;
        this.campaigns = [];
        this.campaign = new __WEBPACK_IMPORTED_MODULE_1_app_model_Campaign__["a" /* Campaign */]();
    }
    DisplayComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fundraiserService.numOfCampaign().subscribe(function (res) {
            console.log(res);
            _this.noOfCampaigns = res;
            _this.getCampaigns();
        }, function (err) {
            console.log('eerr no of camp', err);
        });
    };
    DisplayComponent.prototype.search = function () {
        var _this = this;
        /* this.web3Instance.campaigns(1, (err, res) => {
           console.log(err, res);
           this.campaigns = res;
         });
         this.web3Instance.numCampaigns((err, res) => {
           console.log(err, res);
           this.noOfCampaigns = res;
         });*/
        this.fundraiserService.search(this.campaignId).subscribe(function (res) {
            console.log(res);
            _this.campaigns = [];
            _this.campaigns.push(res);
        }, function (err) {
            console.log('err in search', err);
        });
    };
    DisplayComponent.prototype.getCampaigns = function () {
        var _this = this;
        /* this.web3Instance.campaigns(1, (err, res) => {
           console.log(err, res);
           this.campaigns = res;
         });
         this.web3Instance.numCampaigns((err, res) => {
           console.log(err, res);
           this.noOfCampaigns = res;
         });*/
        this.fundraiserService.getMultiple(1, this.noOfCampaigns).subscribe(function (res) {
            console.log(res);
            _this.campaigns = [];
            _this.campaigns = res;
        }, function (err) {
            console.log('err in getting multiple', err);
        });
    };
    return DisplayComponent;
}());
DisplayComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-display',
        template: __webpack_require__("../../../../../src/app/component/display/display.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/display/display.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_service_fundraiser_service__["a" /* FundraiserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_service_fundraiser_service__["a" /* FundraiserService */]) === "function" && _a || Object])
], DisplayComponent);

var _a;
//# sourceMappingURL=display.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/new-campaign/new-campaign.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/new-campaign/new-campaign.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    New Campaign\n  </div>\n  <div class=\"card-body\">\n    <form>\n      <div class=\"form-group\">\n        <label for=\"beneficiary\">Beneficiary Address</label>\n        <input type=\"text\" class=\"form-control\" name=\"campaign.beneficiary\" [(ngModel)]=\"campaign.beneficiary\" placeholder=\"0x20CcbCda54FCED4b07608876d1432336Bad478B5\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"fundingGoal\">Funding goal in Ether</label>\n        <input type=\"number\" class=\"form-control\" name=\"campaign.fundingGoal\" [(ngModel)]=\"campaign.fundingGoal\" placeholder=\"1000\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"deadline\">Duration in mins</label>\n        <input type=\"number\" class=\"form-control\" name=\"campaign.deadline\" [(ngModel)]=\"campaign.deadline\" placeholder=\"43200\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"detailsUrl\">Details URL</label>\n        <input type=\"text\" class=\"form-control\" name=\"campaign.detailsUrl\" [(ngModel)]=\"campaign.detailsUrl\" placeholder=\"http://your-url.com\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"category\">Category</label>\n        <input type=\"text\" class=\"form-control\" name=\"campaign.category\" [(ngModel)]=\"campaign.category\" placeholder=\"Category\">\n      </div>\n      <button type=\"submit\" class=\"btn btn-info\" (click)=\"addNewCampaign()\">Add New Campaign</button>\n\n    </form>\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/new-campaign/new-campaign.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_model_Campaign__ = __webpack_require__("../../../../../src/app/model/Campaign.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_service_fundraiser_service__ = __webpack_require__("../../../../../src/app/service/fundraiser.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewCampaignComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewCampaignComponent = (function () {
    function NewCampaignComponent(fundraiserService) {
        this.fundraiserService = fundraiserService;
        this.campaign = new __WEBPACK_IMPORTED_MODULE_1_app_model_Campaign__["a" /* Campaign */]();
    }
    NewCampaignComponent.prototype.ngOnInit = function () {
    };
    NewCampaignComponent.prototype.addNewCampaign = function () {
        /**@TODO
         * validate,
         *
         */
        this.fundraiserService.addNewCampaign(this.campaign)
            .subscribe(function (res) {
            console.log('new campaign res ', res);
        }, function (err) {
            console.log("err", err);
        });
        /*if (this.isWeb3Available) {
          this.web3Instance.newCampaign(this.campaign.beneficiary, this.campaign.fundingGoal,
            this.campaign.durationInMin, this.campaign.detailsUrl, this.campaign.category, (err, res) => {
              console.log(err, res);
              this.campaigns = res;
            });
        } else {
          // console.log(this.web3);
          // console.log(this.web3.eth)
          // console.log(this.web3.eth.accounts)
    
          // console.log(this.campaign);
          this.unLockAccount().then(res => {
            console.log(res);
            if (res) {
              this.web3Instance.methods.newCampaign(this.campaign.beneficiary, this.campaign.fundingGoal,
                  this.campaign.durationInMin, this.campaign.detailsUrl, this.campaign.category).send({
                  from: this.accountAddress,
                  gas: Constants.GAS_NEW_CAMPAIGN
                }).on('transactionHash', function (hash) {
                  console.log("hash ", hash);
                  // this.lockAccount();
                })
                .on('receipt', function (receipt) {
                  console.log("receipt ", receipt);
                })
                .on('confirmation', function (confirmationNumber, receipt) {
                  console.log("confirmation no ", confirmationNumber);
                  console.log("receipt ", receipt);
                })
                .on('error', console.error);
            } else {
              alert('invalid password')
            }
          }).catch(err => console.log(err))
        }*/
    };
    return NewCampaignComponent;
}());
NewCampaignComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-new-campaign',
        template: __webpack_require__("../../../../../src/app/component/new-campaign/new-campaign.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/new-campaign/new-campaign.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_service_fundraiser_service__["a" /* FundraiserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_service_fundraiser_service__["a" /* FundraiserService */]) === "function" && _a || Object])
], NewCampaignComponent);

var _a;
//# sourceMappingURL=new-campaign.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/sign-in/sign-in.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/sign-in/sign-in.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <h5 class=\"card-header\">Unlock account</h5>\n    <div class=\"card-body\">\n      <form>\n\n        <div class=\"form-group\">\n          <label for=\"exampleFormControlInput1\">Public Address</label>\n          <input type=\"text\" class=\"form-control\" name=\"accountAddress\" [(ngModel)]=\"accountAddress\" placeholder=\"\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"exampleFormControlInput1\">Password</label>\n          <input type=\"password\" class=\"form-control\" name=\"accountPassword\" [(ngModel)]=\"accountPassword\" placeholder=\"1000\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-info\" (click)=\"unLockAccount()\">Unlock</button>\n      </form>\n\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/component/sign-in/sign-in.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_service_fundraiser_service__ = __webpack_require__("../../../../../src/app/service/fundraiser.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_service_util_service__ = __webpack_require__("../../../../../src/app/service/util.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_model_constants__ = __webpack_require__("../../../../../src/app/model/constants.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignInComponent = (function () {
    function SignInComponent(fundraiserService) {
        this.fundraiserService = fundraiserService;
        this.accountAddress = __WEBPACK_IMPORTED_MODULE_3_app_model_constants__["a" /* Constants */].ACCOUNT_ADDRESS;
        this.accountPassword = __WEBPACK_IMPORTED_MODULE_3_app_model_constants__["a" /* Constants */].ACCOUNT_PASSWORD;
    }
    SignInComponent.prototype.ngOnInit = function () {
        this.unLockAccount();
    };
    SignInComponent.prototype.unLockAccount = function () {
        if (__WEBPACK_IMPORTED_MODULE_2_app_service_util_service__["a" /* UtilService */].isValidAddress(this.accountAddress) && this.accountPassword) {
            this.fundraiserService.accountAddress = this.accountAddress;
            this.fundraiserService.accountPassword = this.accountPassword;
            this.fundraiserService.unlockAccount().subscribe(function (res) {
                console.log(res);
            }, function (err) {
                console.log(err);
            });
        }
        else {
            alert('Please add account address and password!');
        }
    };
    return SignInComponent;
}());
SignInComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-sign-in',
        template: __webpack_require__("../../../../../src/app/component/sign-in/sign-in.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/sign-in/sign-in.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_service_fundraiser_service__["a" /* FundraiserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_service_fundraiser_service__["a" /* FundraiserService */]) === "function" && _a || Object])
], SignInComponent);

var _a;
//# sourceMappingURL=sign-in.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/team/team.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/team/team.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  team works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/component/team/team.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TeamComponent = (function () {
    function TeamComponent() {
    }
    TeamComponent.prototype.ngOnInit = function () {
    };
    return TeamComponent;
}());
TeamComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-team',
        template: __webpack_require__("../../../../../src/app/component/team/team.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/team/team.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TeamComponent);

//# sourceMappingURL=team.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/withdraw/withdraw.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/withdraw/withdraw.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"card\">\n    <h5 class=\"card-header\">Withdraw</h5>\n    <div class=\"card-body\">\n      <form>\n\n        <div class=\"form-group\">\n          <label for=\"exampleFormControlInput1\">Campaign Id</label>\n          <input type=\"number\" class=\"form-control\" name=\"campaignId\" [(ngModel)]=\"campaignId\" placeholder=\"Campaign Id - 1\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-danger\" (click)=\"withdraw()\">Withdraw</button>\n      </form>\n\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/component/withdraw/withdraw.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_service_fundraiser_service__ = __webpack_require__("../../../../../src/app/service/fundraiser.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WithdrawComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WithdrawComponent = (function () {
    function WithdrawComponent(fundraiserService) {
        this.fundraiserService = fundraiserService;
    }
    WithdrawComponent.prototype.ngOnInit = function () {
    };
    WithdrawComponent.prototype.withdraw = function () {
        this.fundraiserService.withdraw(this.campaignId).subscribe(function (res) {
            console.log('withdraw ', res);
        }, function (err) {
            console.log('withdraw ', err);
        });
    };
    return WithdrawComponent;
}());
WithdrawComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-withdraw',
        template: __webpack_require__("../../../../../src/app/component/withdraw/withdraw.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/withdraw/withdraw.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_service_fundraiser_service__["a" /* FundraiserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_service_fundraiser_service__["a" /* FundraiserService */]) === "function" && _a || Object])
], WithdrawComponent);

var _a;
//# sourceMappingURL=withdraw.component.js.map

/***/ }),

/***/ "../../../../../src/app/model/Campaign.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Campaign; });
var Campaign = (function () {
    function Campaign(option) {
        if (option) {
            this.beneficiary = option.beneficiary;
            this.fundingGoal = option.fundingGoal;
            this.deadline = option.deadline;
            this.detailsUrl = option.detailsUrl;
            this.category = option.category;
            this.numFunders = option.numFunders;
            this.amountRaised = option.amountRaised;
            this.isWithdrawn = option.isWithdrawn;
        }
    }
    Campaign.toCampaign = function (res, isWeb3Available, id) {
        var campaign = new Campaign();
        if (isWeb3Available) {
            // alert('@TODO   Plz check the reposnse and complete the mehtod');
            campaign.id = id;
            campaign.beneficiary = res[0];
            campaign.fundingGoal = res[1].toNumber();
            campaign.deadline = res[2].toNumber();
            campaign.detailsUrl = res[3];
            campaign.category = res[4];
            campaign.numFunders = res[5].toNumber();
            campaign.amountRaised = res[6].toNumber();
            campaign.isWithdrawn = res[7];
        }
        else {
            campaign.id = id;
            campaign.beneficiary = res.beneficiary;
            campaign.fundingGoal = res.fundingGoal;
            campaign.deadline = res.deadline;
            campaign.detailsUrl = res.detailsUrl;
            campaign.category = res.category;
            campaign.numFunders = res.numFunders;
            campaign.amountRaised = res.amountRaised;
            campaign.isWithdrawn = res.isWithdrawn;
        }
        return campaign;
    };
    return Campaign;
}());

//# sourceMappingURL=Campaign.js.map

/***/ }),

/***/ "../../../../../src/app/model/constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contract_bytecode__ = __webpack_require__("../../../../../src/app/model/contract-bytecode.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constants; });

var Constants = (function () {
    function Constants() {
    }
    return Constants;
}());

Constants.CONTRACT = __WEBPACK_IMPORTED_MODULE_0__contract_bytecode__["a" /* CONTARCT_BYTE_CODE */];
// '0x20CcbCda54FCED4b07608876d1432336Bad478B5';// local // Current address if the user selects a custom
Constants.CONTRACT_ADDRESS = '0x341C4DE7F498e37743c8b65b2aDC99113E0eA8d8';
Constants.DEFAULT_NODEIP = 'https://rinkeby.infura.io/yOoJnyUNypxcLq0Ou20O'; // 'http://localhost:8545'; // 'https://eth3.augur.net'; // Default node
Constants.GAS_NEW_CAMPAIGN = 245000;
Constants.GAS_WITHDRAW = 120000;
Constants.GAS_CONTRIBUTE = 184882;
Constants.UNLOCK_TIME = 2000;
// public static ACCOUNT_ADDRESS = '0x48A105d092dCD56735CA052EA3c82ebfaB367f9b';
// public static ACCOUNT_PASSWORD = 'ether123#';
Constants.ACCOUNT_ADDRESS = '0x0206fC3499F305B41160b0cbC3b18B57301BBe79';
Constants.ACCOUNT_PASSWORD = 'Ether123#';
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "../../../../../src/app/model/contract-bytecode.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CONTARCT_BYTE_CODE; });
/*export const CONTARCT_BYTE_CODE = [{
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "uint256"
    }],
    "name": "campaigns",
    "outputs": [{
      "name": "beneficiary",
      "type": "address",
      "value": "0x0000000000000000000000000000000000000000"
    }, {
      "name": "fundingGoal",
      "type": "uint256",
      "value": "0"
    }, {
      "name": "deadline",
      "type": "uint256",
      "value": "0"
    }, {
      "name": "detailsUrl",
      "type": "string",
      "value": ""
    }, {
      "name": "category",
      "type": "string",
      "value": ""
    }, {
      "name": "numFunders",
      "type": "uint256",
      "value": "0"
    }, {
      "name": "amountRaised",
      "type": "uint256",
      "value": "0"
    }, {
      "name": "isWithdrawn",
      "type": "bool",
      "value": false
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "numCampaigns",
    "outputs": [{
      "name": "",
      "type": "uint256",
      "value": "4"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "campaignID",
      "type": "uint256"
    }],
    "name": "checkGoalReached",
    "outputs": [{
      "name": "reached",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "campaignID",
      "type": "uint256"
    }],
    "name": "safeWithdrawal",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "campaignID",
      "type": "uint256"
    }, {
      "name": "durationInMinutes",
      "type": "uint256"
    }],
    "name": "extendDeadLine",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "campaignID",
      "type": "uint256"
    }],
    "name": "contribute",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "beneficiary",
      "type": "address"
    }, {
      "name": "goal",
      "type": "uint256"
    }, {
      "name": "durationInMinutes",
      "type": "uint256"
    }, {
      "name": "detailsUrl",
      "type": "string"
    }, {
      "name": "category",
      "type": "string"
    }],
    "name": "newCampaign",
    "outputs": [{
      "name": "campaignID",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "campaignID",
      "type": "uint256"
    }, {
      "indexed": false,
      "name": "backer",
      "type": "address"
    }, {
      "indexed": false,
      "name": "amount",
      "type": "uint256"
    }, {
      "indexed": false,
      "name": "isContribution",
      "type": "bool"
    }],
    "name": "FundTransfer",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "campaignID",
      "type": "uint256"
    }, {
      "indexed": false,
      "name": "recipient",
      "type": "address"
    }, {
      "indexed": false,
      "name": "totalAmountRaised",
      "type": "uint256"
    }],
    "name": "GoalReached",
    "type": "event"
  }];
*/
/*export const CONTARCT_BYTE_CODE = [{
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "uint256"
    }],
    "name": "campaigns",
    "outputs": [{
      "name": "beneficiary",
      "type": "address",
      "value": "0x0000000000000000000000000000000000000000"
    }, {
      "name": "fundingGoal",
      "type": "uint256",
      "value": "0"
    }, {
      "name": "deadline",
      "type": "uint256",
      "value": "0"
    }, {
      "name": "detailsUrl",
      "type": "string",
      "value": ""
    }, {
      "name": "category",
      "type": "string",
      "value": ""
    }, {
      "name": "numFunders",
      "type": "uint256",
      "value": "0"
    }, {
      "name": "amountRaised",
      "type": "uint256",
      "value": "0"
    }, {
      "name": "isWithdrawn",
      "type": "bool",
      "value": false
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "numCampaigns",
    "outputs": [{
      "name": "",
      "type": "uint256",
      "value": "4"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "campaignID",
      "type": "uint256"
    }],
    "name": "checkGoalReached",
    "outputs": [{
      "name": "reached",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "campaignID",
      "type": "uint256"
    }],
    "name": "safeWithdrawal",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "campaignID",
      "type": "uint256"
    }, {
      "name": "durationInMinutes",
      "type": "uint256"
    }],
    "name": "extendDeadLine",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "campaignID",
      "type": "uint256"
    }],
    "name": "contribute",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "beneficiary",
      "type": "address"
    }, {
      "name": "goal",
      "type": "uint256"
    }, {
      "name": "durationInMinutes",
      "type": "uint256"
    }, {
      "name": "detailsUrl",
      "type": "string"
    }, {
      "name": "category",
      "type": "string"
    }],
    "name": "newCampaign",
    "outputs": [{
      "name": "campaignID",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "campaignID",
      "type": "uint256"
    }, {
      "indexed": false,
      "name": "backer",
      "type": "address"
    }, {
      "indexed": false,
      "name": "amount",
      "type": "uint256"
    }, {
      "indexed": false,
      "name": "isContribution",
      "type": "bool"
    }],
    "name": "FundTransfer",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "campaignID",
      "type": "uint256"
    }, {
      "indexed": false,
      "name": "recipient",
      "type": "address"
    }, {
      "indexed": false,
      "name": "totalAmountRaised",
      "type": "uint256"
    }],
    "name": "GoalReached",
    "type": "event"
  }];
*/ var CONTARCT_BYTE_CODE = [{
        "constant": true,
        "inputs": [{
                "name": "",
                "type": "uint256"
            }],
        "name": "campaigns",
        "outputs": [{
                "name": "beneficiary",
                "type": "address"
            }, {
                "name": "fundingGoal",
                "type": "uint256"
            }, {
                "name": "deadline",
                "type": "uint256"
            }, {
                "name": "detailsUrl",
                "type": "string"
            }, {
                "name": "category",
                "type": "string"
            }, {
                "name": "numFunders",
                "type": "uint256"
            }, {
                "name": "amountRaised",
                "type": "uint256"
            }, {
                "name": "isWithdrawn",
                "type": "bool"
            }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "numCampaigns",
        "outputs": [{
                "name": "",
                "type": "uint256"
            }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{
                "name": "campaignID",
                "type": "uint256"
            }],
        "name": "checkGoalReached",
        "outputs": [{
                "name": "reached",
                "type": "bool"
            }],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{
                "name": "campaignID",
                "type": "uint256"
            }],
        "name": "safeWithdrawal",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "giveAwayCoin",
        "outputs": [{
                "name": "",
                "type": "uint256"
            }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "tokenReward",
        "outputs": [{
                "name": "",
                "type": "address"
            }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{
                "name": "totalCoins",
                "type": "uint256"
            }],
        "name": "changeGiveAwayCoin",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [{
                "name": "",
                "type": "address"
            }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{
                "name": "campaignID",
                "type": "uint256"
            }, {
                "name": "durationInMinutes",
                "type": "uint256"
            }],
        "name": "extendDeadLine",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{
                "name": "campaignID",
                "type": "uint256"
            }],
        "name": "contribute",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{
                "name": "beneficiary",
                "type": "address"
            }, {
                "name": "goal",
                "type": "uint256"
            }, {
                "name": "durationInMinutes",
                "type": "uint256"
            }, {
                "name": "detailsUrl",
                "type": "string"
            }, {
                "name": "category",
                "type": "string"
            }],
        "name": "newCampaign",
        "outputs": [{
                "name": "campaignID",
                "type": "uint256"
            }],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{
                "name": "addressOfTokenUsedAsReward",
                "type": "address"
            }],
        "name": "changeGiveAwayTokenAddress",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{
                "name": "newOwner",
                "type": "address"
            }],
        "name": "transferOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
                "name": "giveAwayCoins",
                "type": "uint256",
                "index": 0,
                "typeShort": "uint",
                "bits": "256",
                "displayName": "give Away Coins",
                "template": "elements_input_uint",
                "value": "100"
            }, {
                "name": "addressOfTokenUsedAsReward",
                "type": "address",
                "index": 1,
                "typeShort": "address",
                "bits": "",
                "displayName": "address Of Token Used As Reward",
                "template": "elements_input_address",
                "value": "0xb331Cc27D592053972a0ee4106A558131BB7B663"
            }],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    }, {
        "anonymous": false,
        "inputs": [{
                "indexed": false,
                "name": "campaignID",
                "type": "uint256"
            }, {
                "indexed": false,
                "name": "backer",
                "type": "address"
            }, {
                "indexed": false,
                "name": "amount",
                "type": "uint256"
            }, {
                "indexed": false,
                "name": "isContribution",
                "type": "bool"
            }],
        "name": "FundTransfer",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{
                "indexed": false,
                "name": "campaignID",
                "type": "uint256"
            }, {
                "indexed": false,
                "name": "recipient",
                "type": "address"
            }, {
                "indexed": false,
                "name": "totalAmountRaised",
                "type": "uint256"
            }],
        "name": "GoalReached",
        "type": "event"
    }];
//# sourceMappingURL=contract-bytecode.js.map

/***/ }),

/***/ "../../../../../src/app/service/fundraiser.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_model_constants__ = __webpack_require__("../../../../../src/app/model/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_web3__ = __webpack_require__("../../../../web3/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_web3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_web3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_model_Campaign__ = __webpack_require__("../../../../../src/app/model/Campaign.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_fromPromise__ = __webpack_require__("../../../../rxjs/add/observable/fromPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_bindCallback__ = __webpack_require__("../../../../rxjs/add/observable/bindCallback.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_bindCallback___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_bindCallback__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__util_service__ = __webpack_require__("../../../../../src/app/service/util.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FundraiserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var FundraiserService = (function () {
    function FundraiserService(utilService) {
        this.utilService = utilService;
        this.contractAddr = __WEBPACK_IMPORTED_MODULE_1_app_model_constants__["a" /* Constants */].CONTRACT_ADDRESS;
        this.defaultNodeIP = __WEBPACK_IMPORTED_MODULE_1_app_model_constants__["a" /* Constants */].DEFAULT_NODEIP;
        this.nodeConnected = true; // If we've established a connection yet
        this.ABI = __WEBPACK_IMPORTED_MODULE_1_app_model_constants__["a" /* Constants */].CONTRACT;
        this.campaign = new __WEBPACK_IMPORTED_MODULE_3_app_model_Campaign__["a" /* Campaign */]();
        this.campaigns = [];
        this.isWeb3Available = false;
    }
    Object.defineProperty(FundraiserService.prototype, "accountAddress", {
        get: function () {
            return this.$accountAddress;
        },
        set: function (value) {
            this.$accountAddress = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FundraiserService.prototype, "accountPassword", {
        set: function (value) {
            this.$accountPassword = value;
        },
        enumerable: true,
        configurable: true
    });
    FundraiserService.prototype.initializeWeb3 = function () {
        if (typeof window['web3'] !== 'undefined' && typeof window['Web3'] !== 'undefined') {
            console.log("Using web3 detected from external source like Metamask");
            this.web3 = new this.Web3(window['web3'].currentProvider);
            this.isWeb3Available = true;
            this.web3Instance = this.web3.eth.contract(this.ABI).at(this.contractAddr);
            console.log(this.web3Instance);
            // console.log(this.web3.eth.accounts[0])
            // console.log(this.web3)
            //  console.log(this.web3.eth.accounts)
            // this.getBalanceOf('0x9831b22d110D694c0a10651D82D856b453cEA00d');
            // console.log(tokenContract);
        }
        else {
            console.log("No web3 detected. Falling back to http://localhost:8545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
            this.web3 = new __WEBPACK_IMPORTED_MODULE_2_web3___default.a(new __WEBPACK_IMPORTED_MODULE_2_web3___default.a.providers.HttpProvider(this.defaultNodeIP));
            this.isWeb3Available = false;
            // console.log(this.web3);
            // console.log(this.web3.eth);
            // console.log(this.web3.eth.accounts);
            this.web3Instance = new this.web3.eth.Contract(this.ABI, this.contractAddr);
            //   console.log(this.web3Instance);
            // console.log(this.     web3.eth.accounts.wallet.load('ether123#') );
            // this.web3Instance.methods.numCampaigns().call((err, res) => {
            //   console.log(err, res);
            //   this.noOfCampaigns = res;
            // });
            // this.web3Instance.methods.campaigns(1).call((err, res) => {
            //   console.log(err, res);
            //   this.campaigns = res;
            // });
        }
    };
    Object.defineProperty(FundraiserService.prototype, "Web3", {
        get: function () {
            return window['Web3'];
        },
        enumerable: true,
        configurable: true
    });
    FundraiserService.prototype.initialize = function () {
        if (!this.web3 && !this.web3Instance) {
            this.initializeWeb3();
        }
    };
    FundraiserService.prototype.unlockAccount = function (unlockTime) {
        var _this = this;
        this.initialize();
        if (this.isWeb3Available) {
            return new __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"](function (observer) {
                window['web3'].eth.getAccounts(function (error, accounts) {
                    if (error) {
                        _this.handleCallback(error, null, observer);
                    }
                    else {
                        if (accounts.length === 0) {
                            _this.handleCallback('Please create account in metamask', null, observer);
                        }
                        else {
                            observer.next(accounts[0]);
                            observer.complete();
                        }
                    }
                });
            });
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"](function (observer) {
                if (__WEBPACK_IMPORTED_MODULE_8__util_service__["a" /* UtilService */].isValidAddress(_this.$accountAddress) && _this.$accountPassword) {
                    _this.web3.eth.personal.unlockAccount(_this.$accountAddress.trim(), _this.$accountPassword.trim(), unlockTime > 100 ? unlockTime : __WEBPACK_IMPORTED_MODULE_1_app_model_constants__["a" /* Constants */].UNLOCK_TIME, function (err, res) { return _this.handleCallback(err, res, observer); });
                }
                else {
                    _this.OnError('Please enter correct account address and password', observer);
                }
            });
        }
    };
    FundraiserService.prototype.addNewCampaign = function (campaign) {
        var _this = this;
        /**
         *
         * @get transaction receipt
         */
        console.log('add new ', campaign);
        this.initialize();
        return new __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"](function (observer) {
            if (_this.isWeb3Available) {
                _this.unlockAccount().subscribe(function (account) {
                    console.log(account);
                    _this.web3Instance.newCampaign(campaign.beneficiary, campaign.fundingGoal, campaign.deadline, campaign.detailsUrl, campaign.category, {
                        from: account,
                        gas: __WEBPACK_IMPORTED_MODULE_1_app_model_constants__["a" /* Constants */].GAS_NEW_CAMPAIGN
                    }, function (err, res) { return _this.handleCallback(err, res, observer); });
                }, function (err) { return _this.OnError(err, observer); });
            }
            else {
                _this.unlockAccount().subscribe(function (res) {
                    console.log(res);
                    if (res) {
                        // this.web3Instance.methods.newCampaign(this.campaign.beneficiary, this.campaign.fundingGoal,
                        //     this.campaign.deadline, this.campaign.detailsUrl, this.campaign.category).send({
                        //     from: this.$accountAddress,
                        //     gas: Constants.GAS_NEW_CAMPAIGN
                        //   }, (err, res1) => this.handleCallback(err, res1, observer));
                        _this.web3Instance.methods.newCampaign(campaign.beneficiary, campaign.fundingGoal, campaign.deadline, campaign.detailsUrl, campaign.category).send({
                            from: _this.$accountAddress,
                            gas: __WEBPACK_IMPORTED_MODULE_1_app_model_constants__["a" /* Constants */].GAS_NEW_CAMPAIGN
                        })
                            .on('transactionHash', function (hash) {
                            console.log("hash ", hash);
                            observer.next(hash);
                            observer.complete();
                        })
                            .on('receipt', function (receipt) {
                            console.log("receipt ", receipt);
                            // observer.next(receipt);
                        })
                            .on('confirmation', function (confirmationNumber, receipt) {
                            console.log("confirmation no ", confirmationNumber);
                            console.log("receipt ", receipt);
                        })
                            .on('error', function (error) {
                            observer.error(error);
                        });
                    }
                    else {
                        _this.OnError('Please enter correct account address and password', observer);
                    }
                }, function (err) { return _this.OnError(err, observer); });
            }
        });
    };
    FundraiserService.prototype.OnError = function (err, observer) {
        if (observer) {
            observer.error(err);
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(err);
        }
    };
    FundraiserService.prototype.search = function (campaignId) {
        var _this = this;
        this.initialize();
        return new __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"](function (observer) {
            if (_this.isWeb3Available) {
                _this.web3Instance.campaigns(campaignId, function (err, res) {
                    if (err)
                        _this.handleCallback(err, res, observer);
                    else {
                        observer.next(__WEBPACK_IMPORTED_MODULE_3_app_model_Campaign__["a" /* Campaign */].toCampaign(res, _this.isWeb3Available));
                        observer.complete();
                    }
                });
            }
            else {
                _this.web3Instance.methods.campaigns(campaignId).call(function (err, res) {
                    if (err) {
                        _this.handleCallback(err, undefined, observer);
                    }
                    else {
                        observer.next(__WEBPACK_IMPORTED_MODULE_3_app_model_Campaign__["a" /* Campaign */].toCampaign(res, _this.isWeb3Available));
                        observer.complete();
                    }
                });
            }
        });
    };
    FundraiserService.prototype.getMultiple = function (from, to) {
        var _this = this;
        if (from > to) {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw('From should be less than to');
        }
        this.initialize();
        var o = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"](function (observer) {
            _this.campaigns = [];
            var _loop_1 = function (i) {
                if (_this.isWeb3Available) {
                    _this.web3Instance.campaigns(i, function (err, res) {
                        if (err) {
                            _this.handleCallback(err, undefined, observer);
                        }
                        else {
                            res.id = i;
                            _this.campaigns.push(__WEBPACK_IMPORTED_MODULE_3_app_model_Campaign__["a" /* Campaign */].toCampaign(res, _this.isWeb3Available, i));
                            // observer.next(this.campaigns);
                            if (_this.campaigns.length >= to - from) {
                                observer.next(_this.campaigns);
                                observer.complete();
                            }
                        }
                    });
                }
                else {
                    _this.web3Instance.methods.campaigns(i).call(function (err, res) {
                        if (err) {
                            _this.handleCallback(err, undefined, observer);
                        }
                        else {
                            res.id = i;
                            _this.campaigns.push(__WEBPACK_IMPORTED_MODULE_3_app_model_Campaign__["a" /* Campaign */].toCampaign(res, _this.isWeb3Available, i));
                            // observer.next(this.campaigns);
                            if (_this.campaigns.length >= to - from) {
                                observer.next(_this.campaigns);
                                observer.complete();
                            }
                        }
                    });
                }
            };
            for (var i = from; i <= to; i++) {
                _loop_1(i);
            }
        });
        return o;
    };
    FundraiserService.prototype.numOfCampaign = function () {
        var _this = this;
        this.initialize();
        return new __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"](function (observer) {
            if (_this.isWeb3Available) {
                _this.web3Instance.numCampaigns(function (err, res) {
                    if (err)
                        _this.handleCallback(err, res, observer);
                    else {
                        observer.next(res.toNumber());
                        observer.complete();
                    }
                });
            }
            else {
                _this.web3Instance.methods.numCampaigns().call(function (err, res) { return _this.handleCallback(err, res, observer); });
            }
        });
    };
    FundraiserService.prototype.handleCallback = function (err, res, observer) {
        console.log('err: ', err, ' res ', res);
        if (observer) {
            if (err) {
                observer.error(err);
            }
            else {
                observer.next(res);
                observer.complete();
            }
        }
        else {
            __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(err);
        }
    };
    FundraiserService.prototype.withdraw = function (campaignId) {
        var _this = this;
        /**
         *
         * @get transaction receipt
         */
        this.initialize();
        return new __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"](function (observer) {
            if (_this.isWeb3Available) {
                _this.unlockAccount().subscribe(function (account) {
                    console.log(account);
                    _this.web3Instance.safeWithdrawal(campaignId, {
                        from: account,
                        gas: __WEBPACK_IMPORTED_MODULE_1_app_model_constants__["a" /* Constants */].GAS_CONTRIBUTE
                    }, function (err, res) { return _this.handleCallback(err, res, observer); });
                }, function (err) { return _this.OnError(err, observer); });
            }
            else {
                _this.unlockAccount().subscribe(function (res) {
                    console.log(res);
                    if (res) {
                        _this.web3Instance.methods.safeWithdrawal(campaignId).send({
                            from: _this.$accountAddress,
                            gas: __WEBPACK_IMPORTED_MODULE_1_app_model_constants__["a" /* Constants */].GAS_WITHDRAW
                        }, function (err, res1) { return _this.handleCallback(err, res1, observer); });
                    }
                    else {
                        _this.OnError('Please enter correct account address and password', observer);
                    }
                }, function (err) { return _this.OnError(err, observer); });
            }
        });
    };
    FundraiserService.prototype.contribute = function (campaignId, ether) {
        var _this = this;
        /**
         *
         * @get transaction receipt
         */
        this.initialize();
        return new __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"](function (observer) {
            if (_this.isWeb3Available) {
                _this.unlockAccount().subscribe(function (account) {
                    console.log(account);
                    _this.web3Instance.contribute(campaignId, {
                        from: account,
                        gas: __WEBPACK_IMPORTED_MODULE_1_app_model_constants__["a" /* Constants */].GAS_CONTRIBUTE,
                        value: ether * 1000000000000000000 + __WEBPACK_IMPORTED_MODULE_1_app_model_constants__["a" /* Constants */].GAS_WITHDRAW
                    }, function (err, res) { return _this.handleCallback(err, res, observer); });
                }, function (err) { return _this.OnError(err, observer); });
            }
            else {
                _this.unlockAccount().subscribe(function (res) {
                    console.log(res);
                    if (res) {
                        console.log(_this.web3Instance.methods);
                        _this.web3Instance.methods.contribute(campaignId).send({
                            from: _this.$accountAddress,
                            gas: __WEBPACK_IMPORTED_MODULE_1_app_model_constants__["a" /* Constants */].GAS_WITHDRAW,
                            value: ether + __WEBPACK_IMPORTED_MODULE_1_app_model_constants__["a" /* Constants */].GAS_WITHDRAW
                        }, function (err, res1) { return _this.handleCallback(err, res1, observer); });
                    }
                    else {
                        _this.OnError('Please enter correct account address and password', observer);
                    }
                }, function (err) { return _this.OnError(err, observer); });
            }
        });
    };
    return FundraiserService;
}());
FundraiserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8__util_service__["a" /* UtilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__util_service__["a" /* UtilService */]) === "function" && _a || Object])
], FundraiserService);

var _a;
//# sourceMappingURL=fundraiser.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/util.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UtilService = (function () {
    function UtilService() {
    }
    UtilService.isValidAddress = function (etherAddress) {
        return (etherAddress.length === 42 || etherAddress.length === 40);
    };
    return UtilService;
}());
UtilService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], UtilService);

//# sourceMappingURL=util.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[4]);
//# sourceMappingURL=main.bundle.js.map