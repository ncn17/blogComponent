import { Component } from '@angular/core';
import { Post } from './exportData';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  PostTab: Post[] = [
    new Post({
      title: `Le baromètre des salaires PHP : c'est parti pour 2018 ! `,
      content: `Depuis 2013, l'association française des utilisateurs de PHP (l'AFUP) diffuse chaque automne une campagne afin de récolter auprès des développeurs des informations sur les salaires et leurs conditions de travail. L'édition 2018, dont le JDN est partenaire, est désormais en ligne et restera ouverte jusqu'au 17 décembre 2018.
      Pour les professionnels, les résultats de cette enquête permettent chaque année de mesurer l'évolution des salaires et des conditions d'emploi et de travail dans le secteur. Ils donnent aussi une vision panoramique des spécialités les plus attractives ou de l'utilisation des différentes versions du langage PHP.      
      Le baromètre 2017 avait collecté plus de 900 réponses et l'AFUP invite tous les développeurs PHP à y répondre cette année encore, qu'ils aient participé ou non l'an dernier, que leur situation ait évolué ou non. Le baromètre des salaires PHP 2018 sera disponible au début de l'année prochaine.`,
      loveIts:  0
    }),
    new Post({
      title: `iPhone X : le système de reconnaissance faciale d’Apple à la hauteur ? `,
      content: ` Le lancement de l’iPhone X d’Apple est l’occasion pour la firme à la pomme de dévoiler une nouvelle fonctionnalité de sécurité : la reconnaissance faciale, appelée Face ID. Celle-ci remplacera l’ancien système de reconnaissance d’empreintes digitales Touch ID. Mais sera-t-elle à la hauteur?

      Depuis l’annonce du nouveau système de reconnaissance faciale d'Apple, Face ID, dévoilé au moment de la présentation de l'iPhone X, nombre d’experts spéculent sur sa réelle efficacité et plus largement sur la reconnaissance faciale. Les avis sont partagés. Mais tous s’accordent sur le fait qu’un système d’authentification doit remplir trois conditions pour être vraiment pertinent et valable : être fiable, facile à utiliser et sécurisé.
      La reconnaissance faciale est-elle facile à utiliser ?
      
      Le principe de la reconnaissance faciale n’est guère compliqué. Elle fonctionne dès que l’utilisateur regarde la caméra de son appareil. Il est même possible de désactiver la fonctionnalité qui requiert un regard direct vers la caméra. Dans l’ensemble, il s’agit d’une méthode beaucoup  plus souple que les autres formes d’authentifications biométriques.
      
      En effet, lors de l’utilisation de Touch ID sur un iPhone ou un ordinateur, quelques problèmes font surface. Les empreintes digitales ne fonctionnent pas après la piscine, une douche ou une séance de sport. De leur côté, les « empreintes vocales » sont dérangeantes dans leur utilisation, car elles sont audibles par les personnes alentours. 
      
      L’identification d’Apple prétend également être plus simple et accessible que les autres mécanismes d’authentification faciale. Grâce à un système de lumière infrarouge, les utilisateurs seraient en mesure de déverrouiller leur iPhone discrètement, y compris avec un éclairage léger, sans avoir à utiliser le flash.
      
      Un autre avantage de l’identification faciale est sa fiabilité supérieure au système de mot de passe. Ces derniers sont parfois difficiles à mémoriser, d’autant plus que les personnes en possèdent plusieurs dizaines, qu’il est parfois long et fastidieux pour les saisir sur le clavier du téléphone. A l’inverse, regarder le téléphone ne prend quasiment pas de temps et ne demande aucun effort.
      
      L’identification faciale semble donc être meilleure au niveau de l’expérience utilisateur. Mais qu’en est-il de sa fiabilité, critère primordial pour un système de sécurité ?
      L’authentification faciale est-elle fiable ?
      
      La vraie question repose sur l’efficacité de l’iPhone X face aux faux positifs. A ce jour, la technologie d’authentification faciale ne bénéficie pas vraiment d’une bonne réputation. Jusqu’ici, elle a déjà été contournée de nombreuses fois par de simples photos de visage. Les chercheurs en sécurité ont également trompé le système d’authentification faciale avec des images fictives de visages via une méthode appelée « Fake Face Bruteforce ». Apple signale pour sa part avoir utilisé la technique de numérisation 3D pour tester la falsification de photos en deux dimensions sur l’iPhone X.
      
      Un autre élément en défaveur de la technologie d’identification faciale est son inconsistance. Des recherches menées par l’IEEE ont montré que les technologies de reconnaissance faciale ont tendance à avoir un taux d’erreur plus important avec les visages de couleur, les femmes ainsi que, de manière générale, les personnes entre 18 et 30 ans.
      
      Même les systèmes du gouvernement américain n’y parviennent pas… la base de données du FBI lui-même possède une « marge d'erreur acceptable » pour les faux positifs de 20% ! Apple espère atteindre un niveau beaucoup moins élevé, mais la firme à la pomme a reconnu que les proches d’une même famille (comme des jumeaux par exemple) ressemblant à l’utilisateur seraient en mesure d’avoir accès au téléphone de celui-ci.
      
      Apple note en outre que des faux négatifs peuvent également apparaitre si l'utilisateur lui-même subit un changement d'apparence notable mais commun, comme une barbe rasée ou une nouvelle coupe de cheveux. Ce qui demande derrière une réinitialisation. Sur ce point, la reconnaissance faciale de l'iPhone X semble être moins statique et plus dynamique que les autres systèmes d'authentification faciale. Mais il s’agit moins ici d’un problème de fiabilité qu’un problème de sécurité.
      L’authentification faciale est-elle sécurisée ?
      
      L’authentification faciale apparait comme plus sécurisée que l’authentification basée sur les empreintes digitales. Après tout, il est plus difficile « d’emprunter » le visage de quelqu’un pour déverrouiller son dispositif, que de lui emprunter ses empreintes digitales. Apple détaille que la reconnaissance faciale de l’iPhone X ne pourra marcher que si l’utilisateur regarde son téléphone avec la bonne position en faisant montre d’engagement. En général, un utilisateur va être conscient si son visage est utilisé pour déverrouiller son portable bien que, encore une fois, cette fonctionnalité puisse être désactivée.
      
      La différence entre l’authentification faciale et l’authentification par empreintes digitales devient même encore plus claire lorsqu’on compare Apple avec… Apple ! L’entreprise rapporte que, pendant qu’une empreinte sur 50 000 peut déverrouiller un iPhone compatible avec Smart Touch, seulement un visage sur 1 000 000 peut déverrouiller un même Face ID sur un iPhone. Ce qui en surface, semble plus performant en ce qui concerne la défense contre le BruteForce.
      
      Toutefois, deviner le bon code à six chiffres sur un iPhone qui n'utilise pas Face ID est aussi un exercice au ratio de 1 sur 1 000 000. Tant que les utilisateurs évitent les codes d'accès communs (codes d'accès séquentiels, codes d'accès répétitifs ou ceux faisant référence à une année récente), un mot de passe à six chiffres est au moins aussi sûr que l’identification faciale.
      
      En outre, un long mot de passe alphanumérique pourrait être encore plus difficile à déverrouiller qu'un appareil utilisant l’identification faciale.
      L’authentification faciale est-elle bonne pour la société ?
      
      Le déploiement généralisé de l’authentification faciale apporte d’autres problèmes que la tentative d’intrusion d’un étranger ou d’un partenaire jaloux dans un iPhone. Pour commencer, pas besoin d’être un expert en sécurité pour connaitre la règle d’or du domaine : ne jamais rendre public un mot de passe. Ces derniers ne fonctionnent jamais mieux que lorsqu’ils sont secrets. Rendus publics, ils peuvent être facilement exploités pour le vol d'identité, comme par exemple les numéros de sécurité sociale ou les données de carte de crédit.
      
      A l’âge des réseaux sociaux, des applications de rencontres en ligne ou de la surveillance gouvernementale, le visage fait aujourd’hui partie du domaine public. Et risque de poser problème au niveau des libertés civiles. Les acteurs du gouvernement américain ne sont peut-être pas en mesure d’obliger quelqu’un à révéler le code d'accès d’un appareil, mais ils peuvent certainement utiliser ses fonctionnalités biométriques pour le débloquer, et accéder à toutes ses données.
      
      Apple signale que ni les empreintes digitales ni les visages des utilisateurs ne sont stockés sur ses serveurs. Au lieu de cela, cette information est stockée localement sur l'appareil iOS lui-même. Si c’est avéré, c'est une démarche intelligente car elle limite la surface d'attaque de l'entreprise. Ce stockage local permet de garantir que les données biométriques des utilisateurs restent aussi privées que possible, et diminue la possibilité qu’elles soient compromises en cas d’une attaque des serveurs d'Apple. Qu’il s’agisse d’une brèche extérieure ou une attaque interne, qu’elle soit traditionnelle ou ordonnée par un tribunal.
      
      Le danger est pourtant toujours présent, d'autant plus que la sécurité biométrique devient plus répandue. Si le visage, ou tout autre marqueur biométrique statique, comme  l’empreinte digitale, ou l’iris, est piraté, c’est toutes les données personnelles qui risquent d'être compromises. Il devient possible pour un hacker d’écraser les données de quelqu’un avec les siennes, et de voler son identité.
      
      Inutile de sombrer pour autant dans la paranoïa. Toutefois, par mesure de sécurité, peut-être faut-il mieux rester sur l'authentification par empreinte digitale. Certes, ce n'est pas aussi fiable ou pratique que l'authentification faciale, mais les empreintes digitales ne sont pas aussi publiques qu’un visage. Et pour l'instant, mieux vaut garder ce dernier pour soi. `,
      loveIts:  0
    }),
    new Post({
      title: `Les « attaques par rebond », le nouveau credo des cyberattaquants`,
      content: `Comment un MSP peut-être un rebond idéal pour atteindre des centaines d’entreprises ?

      Pour Vincent Meysonnet, Responsable Technique Avant-Vente de Bitdefender, les cybercriminels ciblent de plus en plus les fournisseurs de services informatiques managés (Managed Services Provider ou MSP), dans le but d’atteindre leurs clients. Ça n’est effectivement pas une surprise si l’ANSSI dans son bilan annuel a présenté ces « attaques par rebond » comme une menace insidieuse et sophistiquée de plus en plus observée en France, et une vraie source de préoccupation… Dans cette tribune, l’expert alerte surtout sur le risque accru pour les MSP disposant de solutions antivirus et protection endpoints défaillantes ! Le cas GandCrab doit appeler à une plus grande vigilance.  
      
      Pourquoi et comment ça fonctionne ?
      
      La non-exécution de correctifs et de contrôles complémentaires tels que l’authentification multi-facteurs, peut permettre aux attaquants de pénétrer secrètement dans les systèmes. Des solutions antivirus et une protection des endpoints défaillantes offrent aux cybercriminels une entrée sans entrave. Certains Managed Services Providers n’ayant pas corrigé une vulnérabilité connue, ont vu leurs clients être infectés par le ransomware GandCrab. Pour les cybcercriminels, une cible unique peut ainsi ouvrir à de nombreuses autres… Dans la plupart des cas similaires de ransomware, l’antivirus n’a ni détecté, ni stoppé les attaques, et la récupération de fichiers à partir de copies non chiffrées fut impossible. Les conséquences,
      
      L’intérêt est souvent porté sur les mesures supplémentaires que les MSP peuvent prendre, il serait intéressant de considérer sérieusement l’efficacité de chaque couche de sécurité, plutôt que de se limiter au seul examen du nombre de couches. Même si toutes les attaques ne peuvent être évitées, un antivirus hautement efficace dans l’interception des malwares, mêmes inconnus, peut réduire une attaque de ransomware potentiellement dévastatrice, à un simple rapport indiquant qu’une attaque a été déjouée.
      
      Comment les ransomwares et les autres attaques contournent-ils les protections antimalware ?
      
          En utilisant des exploits applicatifs pour prendre le contrôle de systèmes.
      
      En exploitant des vulnérabilités non corrigées présentes dans le code d’applications officielles de confiance, les attaquants peuvent exécuter leurs propres scripts sans que l’antimalware puisse identifier la charge utile malveillante. Après cette prise de contrôle, ils peuvent affiner leur attaque et exécuter un script à distance. Ils désactivent alors la protection, continuent de perfectionner un ransomware ou d’autres charges utiles jusqu’à ce qu’ils ne soient plus détectés. Même si l’attaquant a le contrôle intégral du système, une détection antivirus pourrait alerter le fournisseur de services managés qu’une violation est en cours, avant que l’attaquant ait atteint son objectif.
      
          En ciblant directement les MSP, les cyberattaquants peuvent accéder à distance à leurs clients.
      
      Les entreprises de Managed Service provider sont des cibles attrayantes pour les attaquants, puisque la compromission de leurs systèmes et logiciels d’assistance informatique à distance, donnent accès aux ordinateurs de centaines de clients. L’absence d’un processus de gestion de sécurité éprouvé et d’une sécurité multicouches efficace signifient que les attaquants sont récompensés après avoir fourni un minimum d’efforts.
      
          En personnalisant sans cesse les scripts, leurs comportements et en essayant de désactiver les protections.
      
      Les fichiers et les comportements malveillants sont sans cesse affinés, la plupart des produits antivirus ne sont pas capables de reconnaître leurs versions modifiées. Le processus de chiffrement est autorisé à se lancer. Néanmoins, même s’il est d’abord autorisé à s’exécuter, un ransomware peut être stoppé lorsqu’un comportement malveillant est reconnu. Là encore, en raison de la modification des comportements, la plupart des solutions antivirus ne sont pas capables de tenir le rythme et ne détectent pas, ni n’interrompent les processus.
      
          En utilisant des attaques basées sur des scripts
      
      En tirant parti d’outils de script officiels tels que PowerShell, les attaquants contournent l’analyse antimalware car aucun fichier n’est inscrit sur le disque. Toute l’attaque a alors lieu dans la mémoire et la plupart des outils antivirus ne sont pas capables d’analyser et d’identifier des commandes distantes malveillantes.
      
      Avec l’intensification des attaques et de la compromission des clients, les MSP devraient envisager de repenser leur sécurité, consulter des études indépendantes (AV-Comparatives par exemple) et opter pour des outils plus efficaces, intégrant des couches de protections avancées telles que les anti-exploits ou encore la protection contre les attaques sans fichier (fileless attacks).
      
      Comment des solutions de sécurité des endpoints efficaces et les antivirus peuvent-ils éliminer ces vulnérabilités ?
      
          Même si de nouvelles menaces telles que les ransomwares sont inconnues de l’antivirus, les produits de sécurité les plus efficaces s’appuient sur des algorithmes automatisés avancés qui ont évolué au fil du temps. Ils permettent d’identifier précisément des activités ou des fichiers malveillants basés sur des schémas déjà observés.
      
          Certains produits incluent des technologies anti-exploits capables d’identifier des techniques d’exploits telles que le ROP (Return-Oriented Programming). En ciblant les techniques utilisées dans la plupart des exploits et en analysant les évènements liés à la mémoire, ces technologies protègent également les utilisateurs contre les vulnérabilités inconnues et non corrigées.
      
          Des attaques sans fichier ou des attaques ciblées plus avancées sont évitables ou détectables à l’aide de couches de sécurité supplémentaires qui ne sont malheureusement pas encore adoptées par la majorité des MSP. Ces couches sont capables d’analyser des commandes dans la mémoire lorsqu’aucun fichier n’est présent, de tester des fichiers dans un environnement de sandbox, de fournir un contexte de menaces et de détecter des failles de sécurité en cours sur la base d’indicateurs de compromission.
      
      Les fournisseurs de services managés capables d’utiliser ces technologies sont en mesure de réduire significativement les risques tant pour leurs clients, que pour leurs propres systèmes. C’est pourquoi, il est particulièrement intéressant d’évaluer ces capacités et mettre en œuvre des outils dont l’efficacité supérieure en termes de détection des attaques avancées a été démontrée.`,
      loveIts:  0
    })
  ];

}
