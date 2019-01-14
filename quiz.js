var score = 0;
var questionsAnswered = 0;
var name; 
var mode;
var questionNumber = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100','101','102','103','104','105','106','107','108','109','110','111','112','113','114','115','116','117','118','119','120','121','122','123','124','125','126','127','128','129','130','131','132','133','134','135','136','137','138','139','140','141','142','143','144','145','146','147','148','149','150','151','152','153','154','155','156','157','158','159','160','161','162','163','164','165','166','167','168','169','170','171','172','173','174','175','176','177','178','179','180','181','182','183','184','185','186','187','188','189','190','191','192','193','194','195','196','197','198','199','200','201','202','203','204','205','206','207','208','209','210','211','212','213','214','215','216','217'];
shuffle(questionNumber);

function playQuiz(name){
	if(name === null || name.match(/^ *$/) !== null){
		alert("Please insert your name")
	} else {
		
		score = 0;
		questionsAnswered = 0;
		
		alert("Hi " + name + ", welcome to my CN5122 - Data Communications and Networks TCA1 practice quiz.\nYou need to type the full answer in letter for letter, it's a feature, it helps you remember (; ");
		
		do{
			mode = modeSelect();
		}
		while(mode < 1 || mode > 217 || mode == null);
			

		for(var i = 0; i < mode; i++){
		n = questionNumber[i];
			var response = window.prompt(questions[n].prompt);
			if(response == questions[n].fullAnswer){
				 score++;
				 questionsAnswered++;
				 alert("Correct!\nScore: " + score + "/" + questionsAnswered);
			} else {
				if(response == null) {
					result = confirm("Are you sure you want to close the quiz? Your score will be counted from here");
					if(result == true){
						getScore(score,questionsAnswered); 
						return;
					 } else {
						var response = window.prompt(questions[n].prompt);
					 }
				}
				questionsAnswered++;
				alert("WRONG!\nQuestion: " + questions[n].prompt + "\n\nYour Answer: " + response + "\nCorrect Answer: " + questions[n].fullAnswer);
			}
		}
	getScore(score,questionsAnswered); 
	}
}

function getScore(finalScore,noAnswered){
		alert("You got " + score + "/" + noAnswered);
}

function modeSelect(){
	var number = prompt("How many questions would you like to attempt? 1-217");
	return number;
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

var questions = [
	{ prompt: "The Internet model consists of _______ layers.\n(A) Three\n(B) Five\n(C) Seven\n(D) Eight", 
	fullAnswer: "Five",
	Answer: ""
	},



	{ prompt: "The process-to-process delivery of the entire message is the responsibility of the _______ layer.\n(A) Network\n(B) Transport\n(C) Application\n(D) Physical", 
	fullAnswer: "Transport",
	Answer: ""
	},



	{ prompt: "The _______ layer is the layer closest to the transmission medium.\n(A) Physical\n(B) Data link\n(C) Network\n(D) Transport",
	fullAnswer: "Physical",
	Answer: ""
	},



	{ prompt: "Mail services are available to network users through the _______ layer.\n(A) Data link\n(B) Physical\n(C) Transport\n(D) Application", 
	fullAnswer: "Application",
	Answer: ""
	},



	{ prompt: "As the data packet moves from the upper to the lower layers, headers are _______.\n(A) Added\n(B) Removed\n(C) Rearranged\n(D) Modified", 
	fullAnswer: "Added",
	Answer: ""
	},



	{ prompt: "The _______ layer lies between the network layer and the application layer.\n(A) Physical\n(B) Data link\n(C) Transport\n(D) None of the above", 
	fullAnswer: "Transport",
	Answer: ""
	},



	{ prompt: "Layer 2 lies between the physical layer and the _______ layer.\n(A) Network\n(B) Data link\n(C) Transport\n(D) None of the above", 
	fullAnswer: "Network",
	Answer: ""
	},



	{ prompt: "When data are transmitted from device A to device B, the header from A's layer 4 is read by B's _______ layer.\n(A) Physical\n(B) Transport\n(C) Application\n(D) None of the above", 
	fullAnswer: "Transport",
	Answer: ""
	},



	{ prompt: "The _______ layer changes bits into electromagnetic signals.\n(A) Physical\n(B) Data link\n(C) Transport\n(D) None of the above", 
	fullAnswer: "Physical",
	Answer: ""
	},



	{ prompt: "Which of the following is an application layer service?\n(A) Remote log-in\n(B) File transfer and access\n(C) Mail service\n(D) All the above", 
	fullAnswer: "All the above",
	Answer: ""
	},



	{ prompt: "Why was the OSI model developed?\n(A) Manufacturers disliked the TCP/IP protocol suite.\n(B) The rate of data transfer was increasing exponentially\n(C) Standards were needed to allow any two systems to communicate\n(D) None of the above", 
	fullAnswer: "Standards were needed to allow any two systems to communicate",
	Answer: ""
	},



	{ prompt: "The _______ model shows how the network functions of a computer ought to be organized.\n(A) CCITT\n(B) OSI\n(C) ISO\n(D) ANSI", 
	fullAnswer: "OSI",
	Answer: ""
	},



	{ prompt: "The physical layer is concerned with the movement of _______ over the physical medium.\n(A) programs\n(B) dialogs\n(C) protocols\n(D) bits",  
	fullAnswer: "bits",
	Answer: ""
	},



	{ prompt: "The OSI model consists of _______ layers.\n(A) three\n(B) five\n(C) seven\n(D) eight", 
	fullAnswer: "seven",
	Answer: ""
	},



	{ prompt: "In the OSI model, as a data packet moves from the lower to the upper layers, headers are _______.\n(A) added\n(B) removed\n(C) rearranged\n(D) modified", 
	fullAnswer: "removed",
	Answer: ""
	},



	{ prompt: "In the OSI model, when data is transmitted from device A to device B, the header from A's layer 5 is read by B's _______ layer.\n(A) physical\n(B) transport\n(C) session\n(D) presentation", 
	fullAnswer: "session",
	Answer: ""
	},



	{ prompt: "In the OSI model, what is the main function of the transport layer?\n(A) node-to-node delivery\n(B) process-to-process message delivery\n(C) synchronization\n(D) updating and maintenance of routing tables", 
	fullAnswer: "process-to-process message delivery",
	Answer: ""
	},



	{ prompt: "In the OSI model, encryption and decryption are functions of the ________ layer.\n(A) transport\n(B) session\n(C) presentation\n(D) application", 
	fullAnswer: "presentation",
	Answer: ""
	},



	{ prompt: "When a host on network A sends a message to a host on network B, which address does the router look at?\n(A) port\n(B) logical\n(C) physical\n(D) none of the above", 
	fullAnswer: "logical",
	Answer: ""
	},



	{ prompt: "To deliver a message to the correct application program running on a host, the _______ address must be consulted.\n(A) port\n(B) IP\n(C) physical\n(D) none of the above",  
	fullAnswer: "port",
	Answer: ""
	},



	{ prompt: "IPv6 has _______ -bit addresses.\n(A) 32\n(B) 64\n(C) 128\n(D) variable", 
	fullAnswer: "128",
	Answer: ""
	},



	{ prompt: "ICMPv6 includes _______.\n(A) IGMP\n(B) ARP\n(C) RARP\n(D) a and b", 
	fullAnswer: "a and b",
	Answer: ""
	},



	{ prompt: "The ______ layer is responsible for moving frames from one hop (node) to the next.\n(A) physical\n(B) data link\n(C) transport\n(D) none of the above", 
	fullAnswer: "data link",
	Answer: ""
	},



	{ prompt: "The ______ layer adds a header to the packet coming from the upper layer that includes the logical addresses of the sender and receiver.\n(A) physical\n(B) data link\n(C) network\n(D) none of the above", 
	fullAnswer: "network",
	Answer: ""
	},



	{ prompt: "The_________ layer is responsible for the delivery of a message from one process to another.\n(A) physical\n(B) transport\n(C) network\n(D) none of the above", 
	fullAnswer: "transport",
	Answer: ""
	},



	{ prompt: "The Internetworking Protocol (IP) is a ________ protocol.\n(A) reliable\n(B) connection-oriented\n(C) both a and b\n(D) none of the above", 
	fullAnswer: "none of the above",
	Answer: ""
	},



	{ prompt: "_______ is a process-to-process protocol that adds only port addresses, checksum error control, and length information to the data from the upper layer.\n(A) TCP\n(B) UDP\n(C) IP\n(D) none of the above",  
	fullAnswer: "UDP",
	Answer: ""
	},



	{ prompt: "__________ provides full transport layer services to applications.\n(A) TCP\n(B) UDP\n(C) ARP\n(D) none of the above", 
	fullAnswer: "TCP",
	Answer: ""
	},



	{ prompt: "The ________ address, also known as the link address, is the address of a node as defined by its LAN or WAN.\n(A) port\n(B) physical\n(C) logical\n(D) none of the above", 
	fullAnswer: "physical",
	Answer: ""
	},



	{ prompt: "Ethernet uses a ______ physical address that is imprinted on the network interface card (NIC)\n(A) 32-bit\n(B) 64-bit\n(C) 6-byte\n(D) none of the above", 
	fullAnswer: "6-byte",
	Answer: ""
	},



	{ prompt: "A port address in TCP/IP is ______ bits long.\n(A) 32\n(B) 48\n(C) 16\n(D) none of the above", 
	fullAnswer: "16",
	Answer: ""
	},



	{ prompt: "The ____ created a model called the Open Systems Interconnection, which allows diverse systems to communicate.\n(A) OSI\n(B) ISO\n(C) IEEE\n(D) none of the above", 
	fullAnswer: "ISO",
	Answer: ""
	},



	{ prompt: "The seven-layer _____ model provides guidelines for the development of universally compatible networking protocols.\n(A) OSI\n(B) ISO\n(C) IEEE\n(D) none of the above", 
	fullAnswer: "OSI",
	Answer: ""
	},



	{ prompt: "The physical, data link, and network layers are the ______ support layers.\n(A) user\n(B) network \n(C) both (A) and (B)\n(D) neither (A) nor (B)", 
	fullAnswer: "network",
	Answer: ""
	},



	{ prompt: "The session, presentation, and application layers are the ____ support layers.\n(A) user\n(B) network\n(B)\n(B)", 
	fullAnswer: "user",
	Answer: ""
	},



	{ prompt: "The _______ layer links the network support layers and the user support layers.\n(A) transport\n(B) network\n(C) data link\n(D) session", 
	fullAnswer: "transport",
	Answer: ""
	},



	{ prompt: "The _______ layer coordinates the functions required to transmit a bit stream over a physical medium.\n(A) transport\n(B) network\n(C) data link\n(D) physical", 
	fullAnswer: "physical",
	Answer: ""
	},



	{ prompt: "The _______ layer is responsible for delivering data units from one station to the next without errors.\n(A) transport\n(B) network\n(C) data link\n(D) physical", 
	fullAnswer: "data link",
	Answer: ""
	},



	{ prompt: "The ______ layer is responsible for the source-to-destination delivery of a packet across multiple network links.\n(A) transport\n(B) network\n(C) data link\n(D) physical", 
	fullAnswer: "network",
	Answer: ""
	},



	{ prompt: "The ________ layer is responsible for the process-to-process delivery of the entire message.\n(A) transport\n(B) network\n(C) data link\n(D) physical",  
	fullAnswer: "transport",
	Answer: ""
	},



	{ prompt: "The ______ layer establishes, maintains, and synchronizes the interactions between communicating devices.\n(A) transport\n(B) network\n(C) session\n(D) physical", 
	fullAnswer: "session",
	Answer: ""
	},



	{ prompt: "The _______ layer ensures interoperability between communicating devices through transformation of data into a mutually agreed upon format.\n(A) transport\n(B) network\n(C) data link\n(D) presentation", 
	fullAnswer: "application",
	Answer: ""
	},



	{ prompt: "The _________ layer enables the users to access the network.\n(A) transport\n(B) application\n(C) data link\n(D) physical", 
	fullAnswer: "application",
	Answer: ""
	},



	{ prompt: "TCP/IP is a ______ hierarchical protocol suite developed ____ the OSI model.\n(A) seven-layer; before\n(B) five-layer; before\n(C) six-layer; before\n(D) five-layer; after", 
	fullAnswer: "five-layer; before",
	Answer: ""
	},



	{ prompt: "The TCP/IP _______ layer is equivalent to the combined session, presentation, and application layers of the OSI model.\n(A) application\n(B) network\n(C) data link\n(D) physical", 
	fullAnswer: "physical",
	Answer: ""
	},



	{ prompt: "The ________ address, also known as the link address, is the address of a node as defined by its LAN or WAN.\n(A) physical\n(B) IP\n(C) port\n(D) specific", 
	fullAnswer: "IP",
	Answer: ""
	},



	{ prompt: "The ____ address uniquely defines a host on the Internet.\n(A) physical\n(B) IP\n(C) port\n(D) specific",  
	fullAnswer: "port",
	Answer: ""
	},



	{ prompt: "The_____ address identifies a process on a host.\n(A) physical\n(B) IP\n(C) port\n(D) specific", 
	fullAnswer: "port",
	Answer: ""
	},



	{ prompt: "The sharing of a medium and its link by two or more devices is called _______.\n(A) modulation\n(B) encoding\n(C) line discipline\n(D) multiplexing", 
	fullAnswer: "multiplexing",
	Answer: ""
	},



	{ prompt: "Which multiplexing technique transmits analog signals?\n(A) FDM\n(B) TDM\n(C) WDM\n(D) (A) and (C)", 
	fullAnswer: "(a) and (c)",
	Answer: ""
	},



	{ prompt: "Which multiplexing technique transmits digital signals?\n(A) FDM\n(B) TDM\n(C) WDM\n(D) None of the above", 
	fullAnswer: "TDM",
	Answer: ""
	},



	{ prompt: "Which multiplexing technique shifts each signal to a different carrier frequency?\n(A) FDM\n(B) TDM\n(C) Both (A) and (B)\n(D) None of the above", 
	fullAnswer: "FDM",
	Answer: ""
	},



	{ prompt: "In synchronous TDM, for n signal sources of the same data rate, each frame contains _______ slots.\n(A) n\n(B) n + 1\n(C) n - 1\n(D) 0 to n", 
	fullAnswer: "n",
	Answer: ""
	},



	{ prompt: "In TDM, the transmission rate of the multiplexed path is usually _______ the sum of the transmission rates of the signal sources.\n(A) greater than\n(B) less than\n(C) equal to\n(D) not related to",  
	fullAnswer: "greater than",
	Answer: ""
	},



	{ prompt: "Which multiplexing technique involves signals composed of light beams?\n(A) FDM\n(B) TDM\n(C) WDM\n(D) none of the above", 
	fullAnswer: "WDM",
	Answer: ""
	},



	{ prompt: "_________ utilization is the use of available bandwidth to achieve specific goals.\n(A) Frequency\n(B) Bandwidth\n(C) Amplitude\n(D) None of the above", 
	fullAnswer: "Bandwidth",
	Answer: ""
	},



	{ prompt: "________ can be achieved by using multiplexing; ______ can be achieved by using spreading.\n(A) Efficiency; privacy and antijamming\n(B) Privacy and antijamming; efficiency\n(C) Privacy and efficiency; antijamming\n(D) Efficiency and antijamming; privacy", 
	fullAnswer: "Efficiency; privacy and antijamming",
	Answer: ""
	},



	{ prompt: "________ is the set of techniques that allows the simultaneous transmission of multiple signals across a single data link.\n(A) Demodulating\n(B) Multiplexing\n(C) Compressing\n(D) None of the above", 
	fullAnswer: "Multiplexing",
	Answer: ""
	},



	{ prompt: "In a multiplexed system, __ lines share the bandwidth of ____ link.\n(A) 1; n\n(B) 1; 1\n(C) n; 1\n(D) n; n", 
	fullAnswer: "n;1",
	Answer: ""
	},



	{ prompt: "The word ______ refers to the portion of a _______ that carries a transmission.\n(A) channel; link\n(B) link; channel\n(C) line; channel\n(D) line; link", 
	fullAnswer: "channel; link",
	Answer: ""
	},



	{ prompt: "______ can be applied when the bandwidth of a link (in hertz) is greater than the combined bandwidths of the signals to be transmitted.\n(A) TDM\n(B) FDM\n(B)\n(B)", 
	fullAnswer: "FDM",
	Answer: ""
	},



	{ prompt: "FDM is an _________technique.\n(A) analog\n(B) digital\n(B)\n(D) none of the above",  
	fullAnswer: "analog",
	Answer: ""
	},



	{ prompt: "____ is designed to use the high bandwidth capability of fiber-optic cable.\n(A) FDM\n(B) TDM\n(C) WDM\n(D) None of the above", 
	fullAnswer: "WDM",
	Answer: ""
	},



	{ prompt: "______ is an analog multiplexing technique to combine optical signals.\n(A) FDM\n(B) TDM\n(C) WDM\n(D) None of the above", 
	fullAnswer: "WDM",
	Answer: ""
	},



	{ prompt: "_____ is a digital process that allows several connections to share the high bandwidth of a link.\n(A) FDM\n(B) TDM\n(C) WDM\n(D) None of the above", 
	fullAnswer: "TDM",
	Answer: ""
	},



	{ prompt: "_____ is a digital multiplexing technique for combining several low-rate channels into one high-rate one.\n(A) FDM\n(B) TDM\n(C) WDM\n(D) None of the above", 
	fullAnswer: "TDM",
	Answer: ""
	},



	{ prompt: "We can divide ____ into two different schemes: synchronous or statistical.\n(A) FDM\n(B) TDM\n(C) WDM\n(D) none of the above", 
	fullAnswer: "TDM",
	Answer: ""
	},



	{ prompt: "In ________ TDM, each input connection has an allotment in the output even if it is not sending data.\n(A) synchronous\n(B) statistical\n(C) isochronous\n(D) none of the above", 
	fullAnswer: "synchronous",
	Answer: ""
	},



	{ prompt: "In ________ TDM, slots are dynamically allocated to improve bandwidth efficiency.\n(A) synchronous\n(B) statistical\n(C) isochronous\n(D) none of the above",  
	fullAnswer: "statistical",
	Answer: ""
	},



	{ prompt: "In ________, we combine signals from different sources to fit into a larger bandwidth.\n(A) spread spectrum\n(B) line coding\n(C) block coding\n(D) none of the above", 
	fullAnswer: "spread spectrum",
	Answer: ""
	},



	{ prompt: "_______ is designed to be used in wireless applications in which stations must be able to share the medium without interception by an eavesdropper and without being subject to jamming from a malicious intruder.\n(A) Spread spectrum\n(B) Multiplexing\n(C) Modulation\n(D) None of the above.", 
	fullAnswer: "Spread spectrum",
	Answer: ""
	},



	{ prompt: "The _______ technique uses M different carrier frequencies that are modulated by the source signal. At one moment, the sign modulates one carrier frequency; at the next moment, the signal modulates another carrier frequency.\n(A) FDM\n(B) DSSS\n(C) FHSS\n(D) TDM", 
	fullAnswer: "FHSS",
	Answer: ""
	},



	{ prompt: "The ______ technique expands the bandwidth of a signal by replacing each data bit with n bits.\n(A) FDM\n(B) DSSS\n(C) FHSS\n(D) TDM", 
	fullAnswer: "DSSS",
	Answer: ""
	},



	{ prompt: "Traditionally, _____ methods of switching have been important.\n(A) four\n(B) three\n(C) five\n(D) six", 
	fullAnswer: "three",
	Answer: ""
	},



	{ prompt: "We can divide today's networks into ____ broad categories.\n(A) four\n(B) three\n(C) five\n(D) two", 
	fullAnswer: "three",
	Answer: ""
	},



	{ prompt: "Packet-switched networks can also be divided into ______subcategories: virtual-circuit networks and datagram networks\n(A) four\n(B) three\n(C) two\n(D) five",  
	fullAnswer: "two",
	Answer: ""
	},



	{ prompt: "A ________ network is made of a set of switches connected by physical links, in which each link is divided into n channels.\n(A) line-switched\n(B) frame-switched\n(C) circuit-switched\n(D) none of the above", 
	fullAnswer: "circuit-switched",
	Answer: ""
	},



	{ prompt: "Circuit switching takes place at the ________ layer.\n(A) data line\n(B) physical\n(C) network\n(D) transport", 
	fullAnswer: "physical",
	Answer: ""
	},



	{ prompt: "In _______, the resources need to be reserved during the setup phase; the resources remain dedicated for the entire duration of data transfer phase until the teardown phase.\n(A) datagram switching\n(B) circuit switching\n(C) frame switching\n(D) none of the above", 
	fullAnswer: "circuit switching",
	Answer: ""
	},



	{ prompt: "In _________, there is no resource allocation for a packet.\n(A) datagram switching\n(B) circuit switching\n(C) frame switching\n(D) none of the above", 
	fullAnswer: "datagram switching",
	Answer: ""
	},



	{ prompt: "In _________, resources are allocated on demand.\n(A) datagram switching\n(B) circuit switching\n(C) frame switching\n(D) none of the above", 
	fullAnswer: "datagram switching",
	Answer: ""
	},



	{ prompt: "In __________, each packet is treated independently of all others.\n(A) datagram switching\n(B) circuit switching\n(C) frame switching\n(D) none of the above", 
	fullAnswer: "datagram switching",
	Answer: ""
	},



	{ prompt: "In _______ there are no setup or teardown phases.\n(A) datagram switching\n(B) circuit switching\n(C) frame switching\n(D) none of the above",  
	fullAnswer: "datagram switching",
	Answer: ""
	},



	{ prompt: "A _________ network is a cross between a circuit-switched network and a datagram network. It has some characteristics of both.\n(A) virtual-circuit\n(B) packet-switched\n(C) frame-switched\n(D) none of the above", 
	fullAnswer: "virtual-circuit",
	Answer: ""
	},



	{ prompt: "We can say that a packet switch has _______ types of components.\n(A) two\n(B) three\n(C) four\n(D) none of the above", 
	fullAnswer: "four",
	Answer: ""
	},



	{ prompt: "The simplest type of switching fabric is the ______ switch.\n(A) crosspoint\n(B) crossbar\n(C) TSI\n(D) STS", 
	fullAnswer: "crossbar",
	Answer: ""
	},



	{ prompt: "A ________ switch is a multistage switch with microswitches at each stage that route the packets based on the output port represented as a binary string.\n(A) crossbar\n(B) TSI\n(C) banyan\n(D) none of the above", 
	fullAnswer: "banyan",
	Answer: ""
	},



	{ prompt: "In a banyan switch, for 8 inputs and 8 outputs, we have _____ stages.\n(A) 8\n(B) 4\n(C) 3\n(D) 2", 
	fullAnswer: "3",
	Answer: ""
	},



	{ prompt: "In a banyan switch, for 8 inputs and 8 outputs, we have _____ microswitches at each stage.\n(A) 8\n(B) 4\n(C) 3\n(D) 2", 
	fullAnswer: "4",
	Answer: ""
	},



	{ prompt: "A ________ switch combines space-division and time-division technologies to take advantage of the best of both.\n(A) TST\n(B) SSS\n(C) TTT\n(D) none of the above",  
	fullAnswer: "TST",
	Answer: ""
	},



	{ prompt: "The most popular technology in time-division switching is called the _________.\n(A) STI\n(B) ITS\n(C) TSI\n(D) none of the above", 
	fullAnswer: "TSI",
	Answer: ""
	},



	{ prompt: "Based on the Clos criteria, if N = 200, then n must be equal to or greater than ____.\n(A) 10\n(B) 20\n(C) 30\n(D) 40", 
	fullAnswer: "10",
	Answer: ""
	},



	{ prompt: "Based on the Clos criteria, if N = 200, then k must be equal to or greater than ____.\n(A) 21\n(B) 19\n(C) 31\n(D) 41", 
	fullAnswer: "19",
	Answer: ""
	},



	{ prompt: "Based on the Clos criteria, if N = 200, then the minimum number of crosspoints is greater than or equal to _______.\n(A) 15,200\n(B) 18,000\n(C) 42,000\n(D) 20,000", 
	fullAnswer: "15200",
	Answer: ""
	},



	{ prompt: "In a one-stage space division switch, if N = 200, the number of crosspoints is ______.\n(A) 10,000\n(B) 20,000\n(C) 40,000\n(D) 30,000", 
	fullAnswer: "40000",
	Answer: ""
	},



	{ prompt: "In a three-stage space division switch, if N = 200, the number of crosspoints is ______.\n(A) 40,000\n(B) greater than 40,000\n(C) less than 40,000\n(D) greater than 100,000", 
	fullAnswer: "less than 40,000",
	Answer: ""
	},



	{ prompt: "A ________ switch combines crossbar switches in several (normally three) stages.\n(A) multistage\n(B) multiple crossbar\n(C) multiple path\n(D) none of the above",  
	fullAnswer: "multistage",
	Answer: ""
	},



	{ prompt: "In _______ switching, the paths in the circuit are separated from one another spatially.\n(A) time-division\n(B) space-division\n(C) two-dimensional\n(D) three-dimensional", 
	fullAnswer: "space-division",
	Answer: ""
	},



	{ prompt: "A switched WAN is normally implemented as a _______ network.\n(A) virtual-circuit\n(B) datagram\n(C) circuit-switched\n(D) none of the above", 
	fullAnswer: "virtual-circuit",
	Answer: ""
	},



	{ prompt: "In a ________ network, two types of addressing are involved: global and local.\n(A) virtual-circuit\n(B) datagram\n(C) circuit-switched\n(D) none of the above", 
	fullAnswer: "virtual-circuit",
	Answer: ""
	},



	{ prompt: "The network layer in the Internet is designed as a __________ network.\n(A) virtual-circuit\n(B) datagram\n(C) circuit-switched\n(D) none of the above", 
	fullAnswer: "datagram",
	Answer: ""
	},



	{ prompt: "A switch in a datagram network uses a routing table that is based on the ______ address.\n(A) source\n(B) destination\n(C) local\n(D) none of the above", 
	fullAnswer: "destination",
	Answer: ""
	},



	{ prompt: "The _______ address in the header of a packet in a datagram network normally remains the same during the entire journey of the packet.\n(A) source\n(B) destination\n(C) local\n(D) none of the above", 
	fullAnswer: "destination",
	Answer: ""
	},



	{ prompt: "Which error detection method uses one's complement arithmetic?\n(A) Simple parity check\n(B) Two-dimensional parity check\n(C) CRC\n(D) Checksum",  
	fullAnswer: "Simple parity check",
	Answer: ""
	},



	{ prompt: "Which error detection method consists of just one redundant bit per data unit?\n(A) Simple parity check\n(B) Two-dimensional parity check\n(C) CRC\n(D) Checksum", 
	fullAnswer: "Checksum",
	Answer: ""
	},



	{ prompt: "In cyclic redundancy checking, what is the CRC?\n(A) The divisor\n(B) The quotient\n(C) The dividend\n(D) The remainder", 
	fullAnswer: "The remainder",
	Answer: ""
	},



	{ prompt: "In cyclic redundancy checking, the divisor is _______ the CRC.\n(A) The same size as\n(B) one bit less than\n(C) one bit more than\n(D) none of the above", 
	fullAnswer: "one bit more than",
	Answer: ""
	},



	{ prompt: "A burst error means that two or more bits in the data unit have changed.\n(A) double-bit\n(B) burst\n(C) single-bit\n(D) none of the above", 
	fullAnswer: "burst",
	Answer: ""
	},



	{ prompt: "In ________ error correction, the receiver corrects errors without requesting retransmission.\n(A) backward\n(B) onward\n(C) forward\n(D) none of the above", 
	fullAnswer: "forward",
	Answer: ""
	},



	{ prompt: "In ________ error correction, the receiver asks the sender to send the data again.\n(A) backward\n(B) retransmission\n(C) forward\n(D) none of the above", 
	fullAnswer: "retransmission",
	Answer: ""
	},



	{ prompt: "We can divide coding schemes into two broad categories: ________ and ______coding.\n(A) block; linear\n(B) linear; nonlinear\n(C) block; convolution\n(D) none of the above",  
	fullAnswer: "block; convolution",
	Answer: ""
	},



	{ prompt: "In modulo-2 arithmetic, __________ give the same results.\n(A) addition and multiplication\n(B) addition and division\n(C) addition and subtraction\n(D) none of the above", 
	fullAnswer: "addition and subtraction",
	Answer: ""
	},



	{ prompt: "In modulo-2 arithmetic, we use the ______ operation for both addition and subtraction.\n(A) XOR\n(B) OR\n(C) AND\n(D) none of the above", 
	fullAnswer: "XOR",
	Answer: ""
	},



	{ prompt: "In _____ coding, we divide our message into blocks, each of k bits, called ___.\n(A) block; blockwords\n(B) linear; datawords\n(C) block; datawords\n(D) none of the above", 
	fullAnswer: "block; datawords",
	Answer: ""
	},



	{ prompt: "We add r redundant bits to each block to make the length n = k + r. The resulting nbit blocks are called _________.\n(A) datawords\n(B) blockwords\n(C) codewords\n(D) none of the above", 
	fullAnswer: "codewords",
	Answer: ""
	},



	{ prompt: "The ________ between two words is the number of differences between corresponding bits.\n(A) Hamming code\n(B) Hamming distance\n(C) Hamming rule\n(D) none of the above", 
	fullAnswer: "Hamming distance",
	Answer: ""
	},



	{ prompt: "To guarantee the detection of up to 5 errors in all cases, the minimum Hamming distance in a block code must be _______.\n(A) 5\n(B) 6\n(C) 11\n(D) none of the above", 
	fullAnswer: "6",
	Answer: ""
	},



	{ prompt: "To guarantee correction of up to 5 errors in all cases, the minimum Hamming distance in a block code must be ________.\n(A) 5\n(B) 6\n(C) 11\n(D) none of the above",  
	fullAnswer: "11",
	Answer: ""
	},



	{ prompt: "In a linear block code, the _______ of any two valid codewords creates another valid codeword.\n(A) XORing\n(B) ORing\n(C) ANDing\n(D) none of the above", 
	fullAnswer: "XORing",
	Answer: ""
	},



	{ prompt: "A simple parity-check code can detect __________ errors.\n(A) an even-number of\n(B) two\n(C) no errors\n(D) an odd-number of", 
	fullAnswer: "an odd-number of",
	Answer: ""
	},



	{ prompt: "_______ codes are special linear block codes with one extra property. If a codeword is rotated, the result is another codeword.\n(A) Non-linear\n(B) Convolution\n(C) Cyclic\n(D) none of the above", 
	fullAnswer: "Cyclic",
	Answer: ""
	},



	{ prompt: "The _____ of errors is more difficult than the ______.\n(A) correction; detection\n(B) detection; correction\n(C) creation; correction\n(D) creation; detection", 
	fullAnswer: "correction; detection",
	Answer: ""
	},



	{ prompt: "In modulo-11 arithmetic, we use only the integers in the range ______, inclusive.\n(A) 1 to 10\n(B) 1 to 11\n(C) 0 to 10\n(D) none of the above", 
	fullAnswer: "0 to 10",
	Answer: ""
	},



	{ prompt: "In modulo-2 arithmetic, we use only ______.\n(A) 1 and 2\n(B) 0 and 2\n(C) 0 and 1\n(D) none of the above", 
	fullAnswer: "0 and 1",
	Answer: ""
	},



	{ prompt: "Adding 1 and 1 in modulo-2 arithmetic results in _________.\n(A) 1\n(B) 2\n(C) 0\n(D) none of the above",  
	fullAnswer: "0",
	Answer: ""
	},



	{ prompt: "In block coding, if k =2 and n =3, we have _______ invalid codewords.\n(A) 8\n(B) 4\n(C) 2\n(D) none of the above", 
	fullAnswer: "4",
	Answer: ""
	},



	{ prompt: "The Hamming distance between equal codewords is _________.\n(A) 1\n(B) n\n(C) 0\n(D) none of the above", 
	fullAnswer: "0",
	Answer: ""
	},



	{ prompt: "The Hamming distance between 100 and 001 is ________.\n(A) 2\n(B) 0\n(C) 1\n(D) none of the above", 
	fullAnswer: "2",
	Answer: ""
	},



	{ prompt: "In block coding, if n = 5, the maximum Hamming distance between two codewords is ________.\n(A) 2\n(B) 3\n(C) 5\n(D) none of the above", 
	fullAnswer: "5",
	Answer: ""
	},



	{ prompt: "If the Hamming distance between a dataword and the corresponding codeword is three, there are _____ bits in error.\n(A) 3\n(B) 4\n(C) 5\n(D) none of the above", 
	fullAnswer: "3",
	Answer: ""
	},



	{ prompt: "The _______ of a polynomial is the highest power in the polynomial.\n(A) range\n(B) degree\n(C) power\n(D) none of the above", 
	fullAnswer: "degree",
	Answer: ""
	},



	{ prompt: "The divisor in a cyclic code is normally called the _________.\n(A) degree\n(B) generator\n(C) redundancy\n(D) none of the above",  
	fullAnswer: "generator",
	Answer: ""
	},



	{ prompt: "A generator that contains a factor of ____ can detect all odd-numbered errors.\n(A) x\n(B) x + 1\n(C) 1\n(D) none of the above", 
	fullAnswer: "x + 1",
	Answer: ""
	},



	{ prompt: "Checksums use _________ arithmetic.\n(A) two's complement arithmetic\n(B) one's complement arithmetic\n(B)\n(D) none of the above", 
	fullAnswer: "one's complement arithmetic",
	Answer: ""
	},



	{ prompt: "In one's complement arithmetic, if positive 7 is 0111, then negative 7 is ________.\n(A) 1111\n(B) 1101\n(C) 1000\n(D) none of the above", 
	fullAnswer: "1000",
	Answer: ""
	},



	{ prompt: "The checksum of 1111 and 1111 is _________.\n(A) 1111\n(B) 0000\n(C) 1110\n(D) 0111", 
	fullAnswer: "0000",
	Answer: ""
	},



	{ prompt: "The checksum of 0000 and 0000 is __________.\n(A) 1111\n(B) 0000\n(C) 1110\n(D) 0111", 
	fullAnswer: "1111",
	Answer: ""
	},



	{ prompt: "In ________ each station sends a frame whenever it has a frame to send.\n(A) pure ALOHA\n(B) slotted ALOHA\n(C) both (A) and (B)\n(D) neither (A) nor (B)", 
	fullAnswer: "pure ALOHA",
	Answer: ""
	},



	{ prompt: "In pure ALOHA, the vulnerable time is ______ the frame transmission time.\n(A) the same as\n(B) two times\n(C) three times\n(D) none of the above",  
	fullAnswer: "two times",
	Answer: ""
	},



	{ prompt: "The maximum throughput for pure ALOHA is ________ per cent.\n(A) 12.2\n(B) 18.4\n(C) 36.8\n(D) none of the above", 
	fullAnswer: "18.4",
	Answer: ""
	},



	{ prompt: "In __________, each station is forced to send only at the beginning of the time slot.\n(A) pure ALOHA\n(B) slotted ALOHA\n(B)\n(B)", 
	fullAnswer: "slotted ALOHA",
	Answer: ""
	},



	{ prompt: "In slotted ALOHA, the vulnerable time is ______ the frame transmission time.\n(A) the same as\n(B) two times\n(C) three times\n(D) none of the above", 
	fullAnswer: "the same as",
	Answer: ""
	},



	{ prompt: "The maximum throughput for pure ALOHA is ________ per cent.\n(A) 12.2\n(B) 18.4\n(C) 36.8\n(D) none of the above", 
	fullAnswer: "36.8",
	Answer: ""
	},



	{ prompt: "The vulnerable time for CSMA is the ________propagation time.\n(A) the same as\n(B) two times\n(C) three times\n(D) none of the above", 
	fullAnswer: "the same as",
	Answer: ""
	},



	{ prompt: "In the _________ method, after the station finds the line idle, it sends its frame immediately. If the line is not idle, it continuously senses the line until it finds it idle.\n(A) nonpersistent\n(B) 1-persistent\n(C) p-persistent\n(D) none of the above", 
	fullAnswer: "1-persistent",
	Answer: ""
	},



	{ prompt: "In the ________method, a station that has a frame to send senses the line. If the line is idle, it sends immediately. If the line is not idle, it waits a random amount of time and then senses the line again.\n(A) nonpersistent\n(B) 1-persistent\n(C) p-persistent\n(D) none of the above",  
	fullAnswer: "nonpersistent",
	Answer: ""
	},



	{ prompt: "In the _______method, after the station finds the line idle it sends or refrain from sending based on the outcome of a random number generator. If the line is busy, it tries again.\n(A) nonpersistent\n(B) 1-persistent\n(C) p-persistent\n(D) none of the above", 
	fullAnswer: "p-persistent",
	Answer: ""
	},



	{ prompt: "We have categorized access methods into _______ groups.\n(A) two\n(B) three\n(C) four\n(D) five", 
	fullAnswer: "three",
	Answer: ""
	},



	{ prompt: "In ___________ methods, no station is superior to another station and none is assigned the control over another.\n(A) random access\n(B) controlled access\n(C) channelization\n(D) none of the above", 
	fullAnswer: "random access",
	Answer: ""
	},



	{ prompt: "In ______, the chance of collision can be reduced if a station senses the medium before trying to use it.\n(A) MA\n(B) CSMA\n(C) FDMA\n(D) CDMA", 
	fullAnswer: "CSMA",
	Answer: ""
	},



	{ prompt: "________ requires that each station first listen to the medium before sending.\n(A) MA\n(B) CSMA\n(C) FDMA\n(D) CDMA", 
	fullAnswer: "CSMA",
	Answer: ""
	},



	{ prompt: "__________ augments the CSMA algorithm to detect collision.\n(A) CSMA/CA\n(B) CSMA/CD\n(C) either (A) or (B)\n(D) both (A) and (B)",  
	fullAnswer: "CSMA/CD",
	Answer: ""
	},



	{ prompt: "In ________, a station monitors the medium after it sends a frame to see if the transmission was successful. If so, the station is finished. If, however, there is a collision, the frame is sent again.\n(A) CSMA/CA\n(B) CSMA/CD\n(C) either (A) or (B)\n(D) both (A) and (B)", 
	fullAnswer: "CSMA/CD",
	Answer: ""
	},



	{ prompt: "To avoid collisions on wireless networks, ________was invented.\n(A) CSMA/CA\n(B) CSMA/CD\n(B)\n(B)", 
	fullAnswer: "CSMA/CA",
	Answer: ""
	},



	{ prompt: "In _______, collisions are avoided through the use of three strategies: the interframe space, the contention window, and acknowledgments.\n(A) CSMA/CA\n(B) CSMA/CD\n(B)\n(B)", 
	fullAnswer: "CSMA/CA",
	Answer: ""
	},



	{ prompt: "In _______ methods, the stations consult one another to find which station has the right to send.\n(A) random access\n(B) controlled access\n(C) channelization\n(D) none of the above", 
	fullAnswer: "controlled access",
	Answer: ""
	},



	{ prompt: "In _______ methods, a station cannot send unless it has been authorized by other stations.\n(A) random access\n(B) controlled access\n(C) channelization\n(D) none of the above", 
	fullAnswer: "controlled access",
	Answer: ""
	},



	{ prompt: "We discussed ______ popular controlled-access methods.\n(A) two\n(B) three\n(C) four\n(D) none of the above", 
	fullAnswer: "three",
	Answer: ""
	},



	{ prompt: "In the ________ method, a station needs to make a reservation before sending data. Time is divided into intervals.\n(A) reservation\n(B) polling\n(C) token passing\n(D) none of the above",  
	fullAnswer: "reservation",
	Answer: ""
	},



	{ prompt: "In the _____ method, time is divided into intervals. In each interval, a reservation frame precedes the data frames sent in that interval.\n(A) reservation\n(B) polling\n(C) token passing\n(D) none of the above", 
	fullAnswer: "reservation",
	Answer: ""
	},



	{ prompt: "In the ______ method, all data exchanges must be made through the primary device even when the ultimate destination is a secondary device.\n(A) reservation\n(B) polling\n(C) token passing\n(D) none of the above", 
	fullAnswer: "polling",
	Answer: ""
	},



	{ prompt: "In the _______ method, the primary device controls the link; the secondary devices follow its instructions.\n(A) reservation\n(B) polling\n(C) token passing\n(D) none of the above", 
	fullAnswer: "polling",
	Answer: ""
	},



	{ prompt: "In the _______ method, the stations in a network are organized in a logical ring.\n(A) reservation\n(B) polling\n(C) token passing\n(D) none of the above", 
	fullAnswer: "token passing",
	Answer: ""
	},



	{ prompt: "In the _______ method, each station has a predecessor and a successor.\n(A) reservation\n(B) polling\n(C) token passing\n(D) none of the above", 
	fullAnswer: "token passing",
	Answer: ""
	},



	{ prompt: "In the _________ method, a special packet called a ______ circulates through the ring.\n(A) reservation: control frame\n(B) polling: poll request\n(C) token passing: token\n(D) none of the above",  
	fullAnswer: "token passing: token",
	Answer: ""
	},



	{ prompt: "_________ is a multiple-access method in which the available bandwidth of a link is shared in time, frequency, or through code, between different stations.\n(A) Random access\n(B) Controlled access\n(C) Channelization\n(D) none of the above", 
	fullAnswer: "Channelization",
	Answer: ""
	},



	{ prompt: "We discussed ________ channelization protocols.\n(A) two\n(B) three\n(C) four\n(D) none of the above", 
	fullAnswer: "three",
	Answer: ""
	},



	{ prompt: "In ________, the available bandwidth is divided into frequency bands.\n(A) FDMA\n(B) TDMA\n(C) CDMA\n(D) none of the above", 
	fullAnswer: "FDMA",
	Answer: ""
	},



	{ prompt: "In ______, each station is allocated a band to send its data. In other words, each band is reserved for a specific station, and it belongs to the station all the time.\n(A) FDMA\n(B) TDMA\n(C) CDMA\n(D) none of the above", 
	fullAnswer: "FDMA",
	Answer: ""
	},



	{ prompt: "In _______, the stations share the bandwidth of the channel in time.\n(A) FDMA\n(B) TDMA\n(C) CDMA\n(D) none of the above", 
	fullAnswer: "TDMA",
	Answer: ""
	},



	{ prompt: "In _____, each station is allocated a time slot during which it can send data. Each station transmits its data in its assigned time slot.\n(A) FDMA\n(B) TDMA\n(C) CDMA\n(D) none of the above", 
	fullAnswer: "TDMA",
	Answer: ""
	},



	{ prompt: "In _____, each station transmits its data in its assigned time slot.\n(A) FDMA\n(B) TDMA\n(C) CDMA\n(D) none of the above",  
	fullAnswer: "TDMA",
	Answer: ""
	},



	{ prompt: "In ______, the stations use different codes to achieve multiple access.\n(A) FDMA\n(B) TDMA\n(C) CDMA\n(D) none of the above", 
	fullAnswer: "CDMA",
	Answer: ""
	},



	{ prompt: "_______ is based on coding theory and uses sequences of numbers called chips.\n(A) FDMA\n(B) TDMA\n(C) CDMA\n(D) none of the above", 
	fullAnswer: "CDMA",
	Answer: ""
	},



	{ prompt: "In _______, the sequences are generated using orthogonal codes such the Walsh tables.\n(A) FDMA\n(B) TDMA\n(C) CDMA\n(D) none of the above", 
	fullAnswer: "CDMA",
	Answer: ""
	},



	{ prompt: "What is the hexadecimal equivalent of the Ethernet address 01011010 00010001 01010101 00011000 10101010 00001111?\n(A) 5A:88:AA:18:55:F0\n(B) 5A:81:BA:81:AA:0F\n(C) 5A:18:5A:18:55:0F\n(D) 5A:11:55:18:AA:0F", 
	fullAnswer: "5A:11:55:18:AA:0F",
	Answer: ""
	},



	{ prompt: "If an Ethernet destination address is 07:01:02:03:04:05, then this is a ______ address.\n(A) unicast\n(B) multicast\n(C) broadcast\n(D) any of the above", 
	fullAnswer: "multicast",
	Answer: ""
	},



	{ prompt: "If an Ethernet destination address is 08:07:06:05:44:33, then this is a ______ address.\n(A) unicast\n(B) multicast\n(C) broadcast\n(D) any of the above", 
	fullAnswer: "unicast",
	Answer: ""
	},



	{ prompt: "Which of the following could not be an Ethernet unicast destination?\n(A) 43:7B:6C:DE:10:00\n(B) 44:AA:C1:23:45:32 \n(C) 46:56:21:1A:DE:F4\n(D) 48:32:21:21:4D:34", 
	fullAnswer: "43:7B:6C:DE:10:00",
	Answer: ""
	},



	{ prompt: "Which of the following could not be an Ethernet multicast destination?\n(A) B7:7B:6C:DE:10:00\n(B) 7B:AA:C1:23:45:32\n(C) 7C:56:21:1A:DE:F4\n(D) 83:32:21:21:4D:34", 
	fullAnswer: "7C:56:21:1A:DE:F4",
	Answer: ""
	},



	{ prompt: "_______ is the most widely used local area network protocol.\n(A) Token Ring\n(B) Token Bus\n(C) Ethernet\n(D) none of the above", 
	fullAnswer: "Ethernet",
	Answer: ""
	},



	{ prompt: "The IEEE 802.3 Standard defines _________ CSMA/CD as the access method for firstgeneration 10-Mbps Ethernet.\n(A) 1-persistent\n(B) p-persistent\n(C) non-persistent\n(D) none of the above", 
	fullAnswer: "1-persistent",
	Answer: ""
	},



	{ prompt: "The _______ layer of Ethernet consists of the LLC sublayer and the MAC sublayer.\n(A) data link\n(B) physical\n(C) network\n(D) none of the above", 
	fullAnswer: "data link",
	Answer: ""
	},



	{ prompt: "The _____ sublayer is responsible for the operation of the CSMA/CD access method and framing.\n(A) LLC\n(B) MII\n(C) MAC\n(D) none of the above", 
	fullAnswer: "",
	Answer: ""
	},


	{ prompt: "Each station on an Ethernet network has a unique _______ address imprinted on its network interface card (NIC).\n(A) 5-byte\n(B) 32-bit\n(C) 48-bit\n(D) none of the above",  
	fullAnswer: "48-bit",
	Answer: ""
	},



	{ prompt: "The minimum frame length for 10-Mbps Ethernet is _______bytes.\n(A) 32\n(B) 80\n(C) 128\n(D) none of the above", 
	fullAnswer: "none of the above",
	Answer: ""
	},



	{ prompt: "The maximum frame length for 10-Mbps Ethernet is ________ bytes.\n(A) 1518\n(B) 1500\n(C) 1200\n(D) none of the above", 
	fullAnswer: "1518",
	Answer: ""
	},



	{ prompt: "_________ uses thick coaxial cable.\n(A) 10Base5\n(B) 10Base2\n(C) 10Base-T\n(D) 10Base-F", 
	fullAnswer: "10Base5",
	Answer: ""
	},



	{ prompt: "__________ uses thin coaxial cable.\n(A) 10Base5\n(B) 10Base2\n(C) 10Base-T\n(D) 10Base-F", 
	fullAnswer: "10Base2",
	Answer: ""
	},



	{ prompt: "_________ uses four twisted-pair cables that connect each station to a common hub.\n(A) 10Base5\n(B) 10Base2\n(C) 10Base-T\n(D) 10Base-F", 
	fullAnswer: "10Base-T",
	Answer: ""
	},



	{ prompt: "________ uses fiber-optic cable.\n(A) 10Base5\n(B) 10Base2\n(C) 10Base-T\n(D) 10Base-F", 
	fullAnswer: "10Base-F",
	Answer: ""
	},



	{ prompt: "Fast Ethernet has a data rate of ________Mbps.\n(A) 10\n(B) 100\n(C) 1000\n(D) 10,000",  
	fullAnswer: "100",
	Answer: ""
	},



	{ prompt: "In _________, autonegotiation allows two devices to negotiate the mode or data rate of operation.\n(A) Standard\n(B) Fast Ethernet\n(C) Gigabit Ethernet\n(D) Ten-Gigabit Ethernet", 
	fullAnswer: "Fast Ethernet",
	Answer: ""
	},



	{ prompt: "__________ uses two pairs of twisted-pair cable.\n(A) 100Base-TX\n(B) 100Base-FX\n(C) 100Base-T4\n(D) none of the above", 
	fullAnswer: "100Base-TX",
	Answer: ""
	},



	{ prompt: "_________ uses two fiber-optic cables.\n(A) 100Base-TX\n(B) 100Base-FX\n(C) 100Base-T4\n(D) none of the above", 
	fullAnswer: "100Base-FX",
	Answer: ""
	},



	{ prompt: "_________ uses four pairs of voice-grade, or higher, twisted-pair cable.\n(A) 100Base-TX\n(B) 100Base-FX\n(C) 100Base-T4\n(D) none of the above", 
	fullAnswer: "100Base-T4",
	Answer: ""
	},



	{ prompt: "Gigabit Ethernet has a data rate of ________Mbps.\n(A) 10\n(B) 100\n(C) 1000\n(D) 10,000", 
	fullAnswer: "1000",
	Answer: ""
	},



	{ prompt: "Gigabit Ethernet access methods include _______ mode.\n(A) half-duplex\n(B) full-duplex\n(C) both (A) and (B)\n(D) neither (A) nor (B)", 
	fullAnswer: "both (a) and (b)",
	Answer: ""
	},



	{ prompt: "__________ uses two optical fibers and a short-wave laser source,\n(A) 1000Base-SX\n(B) 1000Base-LX\n(C) 1000Base-T\n(D) none of the above",  
	fullAnswer: "1000Base-SX",
	Answer: ""
	},



	{ prompt: "__________uses two optical fibers and a long-wave laser source.\n(A) 1000Base-SX\n(B) 1000Base-LX\n(C) 1000Base-T\n(D) none of the above", 
	fullAnswer: "1000Base-LX",
	Answer: ""
	},



	{ prompt: "__________ uses four twisted pairs.\n(A) 1000Base-SX\n(B) 1000Base-LX\n(C) 1000Base-T\n(D) none of the above", 
	fullAnswer: "1000Base-T",
	Answer: ""
	},



	{ prompt: "________ uses short-wave 850-nm multimode fiber.\n(A) 10GBase-S\n(B) 10GBase-L\n(C) 10GBase-E\n(D) none of the above", 
	fullAnswer: "10GBase-S",
	Answer: ""
	},



	{ prompt: "________uses long-wave 1310-nm single mode fiber.\n(A) 10GBase-S\n(B) 10GBase-L\n(C) 10GBase-E\n(D) none of the above", 
	fullAnswer: "10GBase-L",
	Answer: ""
	},



	{ prompt: "________ uses 1550-mm single mode fiber.\n(A) 10GBase-S\n(B) 10GBase-L\n(C) 10GBase-E\n(D) none of the above", 
	fullAnswer: "10GBase-E",
	Answer: ""
	},



	{ prompt: "In Ethernet addressing, if the least significant bit of the first byte is 0, the address is _________.\n(A) unicast\n(B) multicast\n(C) broadcast\n(D) none of the above", 
	fullAnswer: "unicast",
	Answer: ""
	},



	{ prompt: "In Ethernet addressing, if the least significant bit of the first byte is 1, the address is _________.\n(A) unicast\n(B) multicast\n(C) broadcast\n(D) none of the above",  
	fullAnswer: "multicast",
	Answer: ""
	},



	{ prompt: "In Ethernet addressing, if all the bits are 1s, the address is _________.\n(A) unicast\n(B) multicast\n(C) broadcast\n(D) none of the above", 
	fullAnswer: "broadcast",
	Answer: ""
	},



	{ prompt: "______defines a protocol data unit (PDU) that is somewhat similar to that of HDLC.\n(A) MAC\n(B) LLC\n(C) LLU\n(D) none of the above", 
	fullAnswer: "LLC",
	Answer: ""
	},



	{ prompt: "The purpose of the _______ is to provide flow and error control for the upper-layer protocols that actually demand these services\n(A) MAC\n(B) LLC\n(C) LLU\n(D) none of the above", 
	fullAnswer: "LLC",
	Answer: ""
	},



	{ prompt: "In the Ethernet, the _______field is actually added at the physical layer and is not (formally) part of the frame.\n(A) CRC\n(B) preamble\n(C) address\n(D) none of the above", 
	fullAnswer: "preamble",
	Answer: ""
	},



	{ prompt: "In the Ethernet frame, the _______ field contains error detection information.\n(A) CRC\n(B) preamble\n(C) address\n(D) none of the above", 
	fullAnswer: "CRC",
	Answer: ""
	},



	{ prompt: "Standard Ethernet (10-Mbps) uses _______ encoding\n(A) NRZ\n(B) AMI\n(C) Manchester\n(D) differential Manchester", 
	fullAnswer: "Manchester",
	Answer: ""
	},



	{ prompt: "100Base-TX uses _________ block coding and ________ line coding.\n(A) 4B/5B; NRZ\n(B) 8B/10B; NRZ\n(C) 4B/5B; MLT-3\n(D) 8B/10B; NRZ",  
	fullAnswer: "4B/5B; MLT-3",
	Answer: ""
	},



	{ prompt: "100Base-FX uses _________ block coding and ________ line coding.\n(A) 4B/5B; NRZ-I\n(B) 8B/10B; NRZ\n(C) 4B/5B; MLT-3\n(D) 8B/10B; NRZ", 
	fullAnswer: "4B/5B; NRZ-I",
	Answer: ""
	},



	{ prompt: "100Base-T4 uses ________ line coding.\n(A) NRZ\n(B) 8B6T\n(C) MLT-3\n(D) Manchester", 
	fullAnswer: "8B6T",
	Answer: ""
	},



	{ prompt: "1000Base-SX, 1000Base-LX, and 1000Base-CX use _________ block coding and ________ line coding.\n(A) 4B/5B; NRZ\n(B) 8B/10B; NRZ\n(C) 4B/5B; MLT-3\n(D) 8B/10B; NRZ", 
	fullAnswer: "8B/10B; NRZ",
	Answer: ""
	},



	{ prompt: "1000Base-T uses ________ line coding.\n(A) 4D-PAM5\n(B) 8B6T\n(C) MLT-3\n(D) Manchester",  
	fullAnswer: "4D-PAM5",
	Answer: ""
	}
];