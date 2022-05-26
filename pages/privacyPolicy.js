import React from "react";
import Link from "next/link";
import styles from "../styles/Docu.module.scss";

export default function privacyPolicy() {
	return (
		<main style={{ margin: "3rem", lineHeight: "1.5rem" }}>
			<h1 className={styles.title1}>POLITIQUE DE CONFIDENTIALITÉ</h1>
			{/* <p className={styles.text}>Last updated: May 16, 2022</p> */}
			<p className={styles.text}>
				Cette politique de confidentialité décrit nos politiques et procédures sur la collecte, l&apos;utilisation et
				la divulgation de vos informations lorsque vous utilisez le service et vous informe de vos droits à la
				vie privée et de la manière dont la loi protège
			</p>
			<p className={styles.text}>
				Nous utilisons vos données personnelles pour fournir et améliorer le service. En utilisant le Service,
				Vous acceptez les collecte et utilisation des informations conformément à la présente politique de
				confidentialité.
			</p>
			<h1 className={styles.title1}>Interprétation et Définitions</h1>
			<h2 className={styles.title2}>Interprétation</h2>
			<p className={styles.text}>
				Les mots dont la lettre initiale est en majuscule ont des significations définies dans les conditions
				suivantes. Les définitions suivantes auront la même signification qu&apos;elles apparaissent au singulier ou
				au pluriel.
			</p>
			<h2 className={styles.title2}>Définitions</h2>
			<p className={styles.text}>Aux fins de la présente politique de confidentialité :</p>
			<ul className={styles.groupList}>
				<li className={styles.list}>
					<p className={styles.text}>
						<strong>&laquo; Compte &raquo;</strong> désigne un compte unique créé pour vous permettre
						d&apos;accéder à notre service ou à des parties de notre service.
					</p>
				</li>
				<li className={styles.list}>
					<p className={styles.text}>
						<strong>&laquo; La société &raquo;</strong> (ci-après dénommée &laquo; la Société &raquo;,
						&laquo; Nous &raquo;, &laquo; Notre &raquo; ou &laquo; Notre &raquo; dans le présent Contrat)
						fait référence à Untel-Officiel.
					</p>
				</li>
				<li className={styles.list}>
					<p className={styles.text}>
						<strong>Les Cookies</strong> sont de petits fichiers qui sont placés sur votre ordinateur,
						appareil mobile ou tout autre appareil par un site Web, contenant les détails de votre
						historique de navigation sur ce site Web parmi ses nombreuses utilisations.
					</p>
				</li>
				<li className={styles.list}>
					<p className={styles.text}>
						<strong>&laquo; Pays &raquo;</strong> fait référence à : France
					</p>
				</li>
				<li className={styles.list}>
					<p className={styles.text}>
						<strong>&laquo; Appareil &raquo;</strong> means any device that can access the Service such as a
						computer, a cellphone or a digital tablet.
					</p>
				</li>
				<li className={styles.list}>
					<p className={styles.text}>
						<strong>Les données personnelles</strong>sont toutes les informations relatives à une personne
						identifiée ou identifiable.
					</p>
				</li>
				<li className={styles.list}>
					<p className={styles.text}>
						<strong>&laquo; Le service &raquo;</strong> fait référence au site Web.
					</p>
				</li>
				<li className={styles.list}>
					<p className={styles.text}>
						<strong>&laquo; Prestataire &raquo;</strong>désigne toute personne physique ou morale qui traite
						les données pour le compte de la Société. Il fait référence à des sociétés tierces ou à des
						personnes employées par la Société pour faciliter le Service, pour fournir le Service au nom de
						la Société, pour effectuer des services liés au Service ou pour aider la Société à analyser la
						manière dont le Service est utilisé.
					</p>
				</li>
				<li className={styles.list}>
					<p className={styles.text}>
						<strong>&laquo; Les données d&apos;utilisation &raquo;</strong>font référence aux données collectées
						automatiquement, soit générées par l&apos;utilisation du service, soit à partir de l&apos;infrastructure
						du service elle-même (par exemple, la durée d&apos;une visite de page).
					</p>
				</li>
				<li className={styles.list}>
					<p className={styles.text}>
						<strong>&laquo; Site &raquo;</strong>fait référence à Untel-Officiel, accessible
						<a href="http://untel-officel.fr" target="_blank" rel="noreferrer">
							http://untel-officel.fr
						</a>
					</p>
				</li>
				<li className={styles.list}>
					<p className={styles.text}>
						<strong>&laquo; Vous &raquo;</strong>désigne la personne accédant ou utilisant le Service, ou la
						société ou toute autre entité juridique au nom de laquelle cette personne accède ou utilise le
						Service, selon le cas.
					</p>
				</li>
			</ul>
			<h1 className={styles.title1}>Collecte et utilisation de vos données personnelles</h1>
			<h2 className={styles.title2}>Types de données collectées</h2>
			<h3 className={styles.title3}>Données personnelles</h3>
			<p className={styles.text}>
				Lors de l&apos;utilisation de notre service, nous pouvons vous demander de nous fournir certaines
				informations personnellement identifiables qui peuvent être utilisées pour vous contacter ou vous
				identifier. Les informations personnellement identifiables peuvent inclure, mais sans s&apos;y limiter :
			</p>
			<ul className={styles.groupList}>
				<li className={styles.list}>
					<p className={styles.text}>Adresse e-mail</p>
				</li>
				<li className={styles.list}>
					<p className={styles.text}>Prénom et nom</p>
				</li>
				<li className={styles.list}>
					<p className={styles.text}>Numéro de téléphone</p>
				</li>
				<li className={styles.list}>
					<p className={styles.text}>Données d&apos;utilisation</p>
				</li>
			</ul>
			<h3 className={styles.title3}>Données d&apos;utilisation</h3>
			<p className={styles.text}>
				Les données d&apos;utilisation sont collectées automatiquement lors de l&apos;utilisation du service.
			</p>
			<p className={styles.text}>
				Les données d&apos;utilisation peuvent inclure des informations telles que l&apos;adresse de protocole Internet de
				votre appareil (par exemple, l&apos;adresse IP), le type de navigateur, la version du navigateur, les pages
				de notre service que vous visitez, l&apos;heure et la date de votre visite, le temps passé sur ces pages,
				l&apos;appareil unique identifiants et autres données de diagnostic.
			</p>
			<p className={styles.text}>
				Lorsque vous accédez au service par ou via un appareil mobile, nous pouvons collecter automatiquement
				certaines informations, y compris, mais sans s&apos;y limiter, le type d&apos;appareil mobile que vous utilisez,
				l&apos;identifiant unique de votre appareil mobile, l&apos;adresse IP de votre appareil mobile, votre système
				d&apos;exploitation, le type de navigateur Internet mobile que vous utilisez, les identifiants uniques de
				l&apos;appareil et d&apos;autres données de diagnostic.
			</p>
			<p className={styles.text}>
				Nous pouvons également collecter des informations que votre navigateur envoie chaque fois que vous
				visitez notre service ou lorsque vous accédez au service par ou via un appareil mobile.
			</p>
			<h3 className={styles.title3}>Technologies de suivi et cookies</h3>
			<p className={styles.text}>
				Nous utilisons des cookies et des technologies de suivi similaires pour suivre l&apos;activité sur notre
				service et stocker certaines informations. Les technologies de suivi utilisées sont des balises, des
				balises et des scripts pour collecter et suivre les informations et pour améliorer et analyser notre
				service. Les technologies que nous utilisons peuvent inclure :
			</p>
			<ul className={styles.groupList}>
				<li className={styles.list}>
					<strong>Cookies ou cookies de navigateur.</strong> Un cookie est un petit fichier placé sur Votre
					Appareil. Vous pouvez demander à Votre navigateur de refuser tous les Cookies ou de vous signaler
					l&apos;envoi d&apos;un Cookie. Cependant, si vous n&apos;acceptez pas les cookies, vous ne pourrez peut-être pas
					utiliser certaines parties de notre service. À moins que vous n&apos;ayez réglé les paramètres de votre
					navigateur pour qu&apos;il refuse les cookies, notre service peut utiliser des cookies.
				</li>
				<li className={styles.list}>
					<strong>Cookies Flash.</strong>Certaines fonctionnalités de notre Service peuvent utiliser des
					objets stockés locaux (ou Flash Cookies) pour collecter et stocker des informations sur Vos
					préférences ou Votre activité sur notre Service. Les cookies Flash ne sont pas gérés par les mêmes
					paramètres de navigateur que ceux utilisés pour les cookies de navigateur. Pour plus d&apos;informations
					sur la façon dont vous pouvez supprimer les cookies Flash, veuillez lire &quot;Où puis-je modifier les
					paramètres de désactivation ou de suppression des objets locaux partagés ?&quot; disponible sur
					<a
						href="https://helpx.adobe.com/flash-player/kb/disable-local-shared-objects-flash.html#main_Where_can_I_change_the_settings_for_disabling__or_deleting_local_shared_objects_"
						target="_blank"
						rel="noreferrer"
					>
						https://helpx.adobe.com/flash-player/kb/disable-local-shared-objects-flash.html#main_Where_can_I_change_the_settings_for_disabling__or_deleting_local_shared_objects_
					</a>
				</li>
				<li className={styles.list}>
					<strong>Balises Web.</strong>Certaines sections de notre Service et nos e-mails peuvent contenir de
					petits fichiers électroniques connus sous le nom de balises Web (également appelés gifs
					transparents, balises pixel et gifs à pixel unique) qui permettent à la Société, par exemple, de
					compter les utilisateurs qui ont visité ces pages. ou ouvert un e-mail et pour d&apos;autres statistiques
					de site Web connexes (par exemple, enregistrer la popularité d&apos;une certaine section et vérifier
					l&apos;intégrité du système et du serveur).
				</li>
			</ul>
			<p className={styles.text}>
				Les cookies peuvent être des cookies &laquo; persistants &raquo; ou &laquo; de session &raquo;. Les
				cookies persistants restent sur votre ordinateur personnel ou votre appareil mobile lorsque vous vous
				déconnectez, tandis que les cookies de session sont supprimés dès que vous fermez votre navigateur Web.
				En savoir plus sur les cookies :
				<a
					href="https://www.freeprivacypolicy.com/blog/sample-privacy-policy-template/#Use_Of_Cookies_And_Tracking"
					target="_blank"
					rel="noreferrer"
				>
					Utilisation des cookies par Free Privacy Policy.
				</a>
				.
			</p>
			<p className={styles.text}>
				Nous utilisons à la fois des cookies de session et des cookies persistants aux fins décrites ci-dessous
				:
			</p>
			<ul className={styles.groupList}>
				<li className={styles.list}>
					<p className={styles.text}>
						<strong>Cookies nécessaires / essentiels</strong>
					</p>
					<p className={styles.text}>Type : Cookies de session</p>
					<p className={styles.text}>Administré par : Nous</p>
					<p className={styles.text}>
						Objectif : Ces cookies sont essentiels pour vous fournir les services disponibles via le site
						Web et pour vous permettre d&apos;utiliser certaines de ses fonctionnalités. Ils aident à
						authentifier les utilisateurs et à empêcher l&apos;utilisation frauduleuse des comptes
						d&apos;utilisateurs. Sans ces cookies, les services que vous avez demandés ne peuvent pas être
						fournis, et nous n&apos;utilisons ces cookies que pour vous fournir ces services.
					</p>
				</li>
				<li className={styles.list}>
					<p className={styles.text}>
						<strong>Politique relative aux cookies / Avis d&apos;acceptation des cookies</strong>
					</p>
					<p className={styles.text}>Type : Cookies persistants</p>
					<p className={styles.text}>Administré par : Nous</p>
					<p className={styles.text}>
						Finalité : ces cookies identifient si les utilisateurs ont accepté l&apos;utilisation de cookies sur
						le site Web.
					</p>
				</li>
				<li className={styles.list}>
					<p className={styles.text}>
						<strong>Cookies de fonctionnalité</strong>
					</p>
					<p className={styles.text}>Type : Cookies persistants</p>
					<p className={styles.text}>Administré par : Nous</p>
					<p className={styles.text}>
						Finalité : ces cookies nous permettent de mémoriser les choix que vous faites lorsque vous
						utilisez le site Web, tels que la mémorisation de vos informations de connexion ou de votre
						préférence de langue. Le but de ces Cookies est de Vous offrir une expérience plus personnelle
						et de Vous éviter d&apos;avoir à ressaisir vos préférences à chaque fois que Vous utilisez le Site.
					</p>
				</li>
			</ul>
			<p className={styles.text}>
				Pour plus d&apos;informations sur les cookies que nous utilisons et vos choix concernant les cookies,
				veuillez consulter notre Politique de cookies ou la section Cookies de notre Politique de
				confidentialité.
			</p>
			<h2 className={styles.title2}>Utilisation de vos données personnelles</h2>
			<p className={styles.text}>La Société peut utiliser les Données Personnelles aux fins suivantes :</p>
			<ul className={styles.groupList}>
				<li className={styles.list}>
					<p className={styles.text}>
						<strong>Pour fournir et maintenir notre Service</strong>, y compris pour surveiller
						l&apos;utilisation de notre Service.
					</p>
				</li>
				<li className={styles.list}>
					<p className={styles.text}>
						<strong>Pour gérer Votre Compte :</strong> pour gérer Votre inscription en tant qu&apos;utilisateur
						du Service. Les données personnelles que vous fournissez peuvent vous donner accès à différentes
						fonctionnalités du service qui sont à votre disposition en tant qu&apos;utilisateur enregistré.
					</p>
				</li>
				<li className={styles.list}>
					<p className={styles.text}>
						<strong>Pour l&apos;exécution d&apos;un contrat :</strong>l&apos;élaboration, la conformité et la réalisation
						du contrat d&apos;achat des produits, articles ou services que vous avez achetés ou de tout autre
						contrat avec nous par le biais du service.
					</p>
				</li>
				<li className={styles.list}>
					<p className={styles.text}>
						<strong>Pour vous contacter :</strong> pour vous contacter par e-mail, appels téléphoniques, SMS
						ou autres formes équivalentes de communication électronique, telles que les notifications push
						d&apos;une application mobile concernant les mises à jour ou les communications informatives
						relatives aux fonctionnalités, produits ou services sous contrat, y compris les mises à jour de
						sécurité, lorsque cela est nécessaire ou raisonnable pour leur mise en œuvre.
					</p>
				</li>
				<li className={styles.list}>
					<p className={styles.text}>
						Pour vous fournir des actualités, des offres spéciales et des informations générales sur
						d&apos;autres biens, services et événements que nous proposons et qui sont similaires à ceux que vous
						avez déjà achetés ou demandés, sauf si vous avez choisi de ne pas recevoir ces informations.
					</p>
				</li>
				<li className={styles.list}>
					<p className={styles.text}>
						<strong>Pour gérer vos demandes :</strong>pour assister et gérer vos demandes que vous nous
						adressez.
					</p>
				</li>
				<li className={styles.list}>
					<p className={styles.text}>
						<strong>Pour les transferts d&apos;entreprise :</strong> pour assister et gérer vos demandes que vous
						nous adressez. Pour les transferts d&apos;entreprise : nous pouvons utiliser vos informations pour
						évaluer ou mener une fusion, une cession, une restructuration, une réorganisation, une
						dissolution ou toute autre vente ou transfert de tout ou partie de nos actifs, que ce soit dans
						le cadre d&apos;une entreprise en activité ou dans le cadre d&apos;une faillite, d&apos;une liquidation, ou
						procédure similaire, dans laquelle les données personnelles que nous détenons sur les
						utilisateurs de nos services font partie des actifs transférés.
					</p>
				</li>
				<li className={styles.list}>
					<p className={styles.text}>
						<strong>À d&apos;autres fins :</strong>nous pouvons utiliser vos informations à d&apos;autres fins, telles
						que l&apos;analyse de données, l&apos;identification des tendances d&apos;utilisation, la détermination de
						l&apos;efficacité de nos campagnes promotionnelles et pour évaluer et améliorer notre service, nos
						produits, nos services, notre marketing et votre expérience.
					</p>
				</li>
			</ul>
			<p className={styles.text}>
				Nous pouvons partager vos informations personnelles dans les situations suivantes :
			</p>
			<ul className={styles.groupList}>
				<li className={styles.list}>
					<strong>Avec les fournisseurs de services :</strong> nous pouvons partager vos informations
					personnelles avec des fournisseurs de services pour surveiller et analyser l&apos;utilisation de notre
					service, pour vous contacter.
				</li>
				<li className={styles.list}>
					<strong>Pour les transferts d&apos;entreprise :</strong> nous pouvons partager ou transférer vos
					informations personnelles dans le cadre de, ou pendant les négociations de, toute fusion, vente
					d&apos;actifs de la société, financement ou acquisition de tout ou partie de nos activités à une autre
					société.
				</li>
				<li className={styles.list}>
					<strong>Avec les affiliés :</strong> nous pouvons partager vos informations avec nos affiliés,
					auquel cas nous exigerons de ces affiliés qu&apos;ils respectent la présente politique de
					confidentialité. Les sociétés affiliées incluent notre société mère et toutes autres filiales,
					partenaires de coentreprise ou autres sociétés que nous contrôlons ou qui sont sous contrôle commun
					avec nous.
				</li>
				<li className={styles.list}>
					<strong>Avec des partenaires commerciaux :</strong> nous pouvons partager vos informations avec nos
					partenaires commerciaux pour vous proposer certains produits, services ou promotions.
				</li>
				<li className={styles.list}>
					<strong>Avec d&apos;autres utilisateurs :</strong> lorsque vous partagez des informations personnelles ou
					interagissez autrement dans les zones publiques avec d&apos;autres utilisateurs, ces informations peuvent
					être vues par tous les utilisateurs et peuvent être diffusées publiquement à l&apos;extérieur.
				</li>
				<li className={styles.list}>
					<strong>Avec votre consentement :</strong>nous pouvons divulguer vos informations personnelles à
					toute autre fin avec votre consentement.
				</li>
			</ul>
			<h2 className={styles.title2}>Conservation de vos données personnelles</h2>
			<p className={styles.text}>
				La Société ne conservera vos données personnelles que le temps nécessaire aux fins énoncées dans la
				présente politique de confidentialité. Nous conserverons et utiliserons vos données personnelles dans la
				mesure nécessaire pour nous conformer à nos obligations légales (par exemple, si nous sommes tenus de
				conserver vos données pour nous conformer aux lois applicables), résoudre les litiges et appliquer nos
				accords et politiques juridiques.
			</p>
			<p className={styles.text}>
				La Société conservera également les données d&apos;utilisation à des fins d&apos;analyse interne. Les données
				d&apos;utilisation sont généralement conservées pendant une période plus courte, sauf lorsque ces données
				sont utilisées pour renforcer la sécurité ou pour améliorer la fonctionnalité de notre service, ou
				lorsque nous sommes légalement tenus de conserver ces données pendant des périodes plus longues.
			</p>
			<h2 className={styles.title2}>Transfert de vos données personnelles</h2>
			<p className={styles.text}>
				Vos informations, y compris les données personnelles, sont traitées dans les bureaux d&apos;exploitation de
				la société et dans tout autre lieu où se trouvent les parties impliquées dans le traitement. Cela
				signifie que ces informations peuvent être transférées et conservées sur des ordinateurs situés en
				dehors de votre état, province, pays ou autre juridiction gouvernementale où les lois sur la protection
				des données peuvent différer de celles de votre juridiction.
			</p>
			<p className={styles.text}>
				Votre consentement à cette politique de confidentialité suivi de votre soumission de ces informations
				représente votre accord à ce transfert.
			</p>
			<p className={styles.text}>
				La société prendra toutes les mesures raisonnablement nécessaires pour garantir que vos données sont
				traitées en toute sécurité et conformément à la présente politique de confidentialité et aucun transfert
				de vos données personnelles n&apos;aura lieu vers une organisation ou un pays à moins que des contrôles
				adéquats ne soient en place, y compris la sécurité de Vos données et autres informations personnelles.
			</p>
			<h2 className={styles.title2}>Divulgation de vos données personnelles</h2>
			<h3 className={styles.title3}>Transactions commerciales</h3>
			<p className={styles.text}>
				Si la Société est impliquée dans une fusion, une acquisition ou une vente d&apos;actifs, Vos Données
				Personnelles peuvent être transférées. Nous vous aviserons avant que vos données personnelles ne soient
				transférées et soumises à une politique de confidentialité différente.
			</p>
			<h3 className={styles.title3}>Forces de l&apos;ordre</h3>
			<p className={styles.text}>
				Dans certaines circonstances, la Société peut être tenue de divulguer vos données personnelles si la loi
				l&apos;exige ou en réponse à des demandes valables d&apos;autorités publiques (par exemple, un tribunal ou une
				agence gouvernementale).
			</p>
			<h3 className={styles.title3}>Autres exigences légales</h3>
			<p className={styles.text}>
				La Société peut divulguer vos données personnelles en croyant de bonne foi qu&apos;une telle action est
				nécessaire pour :
			</p>
			<ul className={styles.groupList}>
				<li className={styles.list}>Respecter une obligation légale</li>
				<li className={styles.list}>Protéger et défendre les droits ou la propriété de la Société</li>
				<li className={styles.list}>
					Prévenir ou enquêter sur d&apos;éventuels actes répréhensibles en rapport avec le Service
				</li>
				<li className={styles.list}>
					Protéger la sécurité personnelle des Utilisateurs du Service ou du public
				</li>
				<li className={styles.list}>Protégez-vous contre la responsabilité légale</li>
			</ul>
			<h2 className={styles.title2}>Sécurité de vos données personnelles</h2>
			<p className={styles.text}>
				La sécurité de vos données personnelles est importante pour nous, mais rappelez-vous qu&apos;aucune méthode
				de transmission sur Internet ou méthode de stockage électronique n&apos;est sécurisée à 100 %. Bien que nous
				nous efforcions d&apos;utiliser des moyens commercialement acceptables pour protéger vos données
				personnelles, nous ne pouvons garantir leur sécurité absolue.
			</p>
			<h1 className={styles.title1}>Confidentialité des enfants</h1>
			<p className={styles.text}>
				Notre service ne s&apos;adresse pas aux personnes de moins de 13 ans. Nous ne collectons pas sciemment
				d&apos;informations personnellement identifiables auprès de personnes de moins de 13 ans. Si vous êtes un
				parent ou un tuteur et que vous savez que votre enfant nous a fourni des données personnelles, veuillez
				Nous contacter. Si nous apprenons que nous avons collecté des données personnelles auprès d&apos;une personne
				de moins de 13 ans sans vérification du consentement parental, nous prenons des mesures pour supprimer
				ces informations de nos serveurs.
			</p>
			<p className={styles.text}>
				Si nous devons compter sur le consentement comme base légale pour le traitement de vos informations et
				que votre pays exige le consentement d&apos;un parent, nous pouvons exiger le consentement de votre parent
				avant de collecter et d&apos;utiliser ces informations.
			</p>
			<h1 className={styles.title1}>Liens vers d&apos;autres sites Web</h1>
			<p className={styles.text}>
				Notre service peut contenir des liens vers d&apos;autres sites Web qui ne sont pas exploités par nous. Si
				vous cliquez sur un lien tiers, vous serez dirigé vers le site de ce tiers. Nous vous conseillons
				vivement de consulter la politique de confidentialité de chaque site que vous visitez.
			</p>
			<p className={styles.text}>
				Nous n&apos;avons aucun contrôle et n&apos;assumons aucune responsabilité quant au contenu, aux politiques de
				confidentialité ou aux pratiques des sites ou services tiers.
			</p>
			<h1 className={styles.title1}>Modifications de cette politique de confidentialité</h1>
			<p className={styles.text}>
				Nous pouvons mettre à jour notre politique de confidentialité de temps à autre. Nous vous informerons de
				tout changement en publiant la nouvelle politique de confidentialité sur cette page.
			</p>
			<p className={styles.text}>
				Nous vous informerons par e-mail et/ou par un avis visible sur notre service, avant que le changement ne
				devienne effectif et mettrons à jour la date de « dernière mise à jour &raquo; en haut de cette
				politique de confidentialité.
			</p>
			<p className={styles.text}>
				Il vous est conseillé de consulter périodiquement cette politique de confidentialité pour tout
				changement. Les modifications apportées à cette politique de confidentialité entrent en vigueur
				lorsqu&apos;elles sont publiées sur cette page.
			</p>
			<h1 className={styles.title1}>Nous contacter</h1>
			<p className={styles.text}>
				Si vous avez des questions concernant cette politique de confidentialité, vous pouvez nous contacter :
			</p>
			<ul className={styles.groupList}>
				<li className={styles.list}>
					Par email :{" "}
					<span className={styles.contactSpan}>
						<a href="mailto:untel.officiel@outlook.com">untel.officiel@outlook.com</a>
					</span>
				</li>
				<li className={styles.list}>
					<p style={{ display: "flex", alignItems: "center" }} className={styles.text}>
						via notre{" "}
						<Link passHref={true} href="/contact">
							<span style={{ marginLeft: 5 }} className={styles.contactSpan}>
								formulaire de contact
							</span>
						</Link>
					</p>
				</li>
			</ul>
		</main>
	);
}
