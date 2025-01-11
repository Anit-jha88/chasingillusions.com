<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'chasingi_newchasingillusions' );

/** Database username */
define( 'DB_USER', 'chasingi_newchasingillusions' );

/** Database password */
define( 'DB_PASSWORD', '4ghg9#Ak;+C]' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'iBVAc{eDgznanp$=pon^-=_DRt)RW 0Z2!LGT_i mZ0DW|SH57ZeJF,t&-JVJr%}' );
define( 'SECURE_AUTH_KEY',  '-hBoJe^]+jxEL!2$tdwG0#N;tp0d76Z1AbOdE{:kSNa=iEDa@<uJ]Lo,}7UxWn9L' );
define( 'LOGGED_IN_KEY',    ']l|oPG>)`-94!K`/VCfc0j F[:Rma(wsIBa^iZqLa/0so(#8d9wiJ+F8qrz!Vt*t' );
define( 'NONCE_KEY',        'a-N+dcdPgN@Q>366Ubn=I1jXoSSvT.K?kz5L^rIz/ TPe{t+-mF`=k=g4Sq^y>]R' );
define( 'AUTH_SALT',        'ajm2<Q~[4_ZB`RH23iU0s fKI,MdG8+YLNc5ztA1>n-LBTrsa&LgK,i1YP(o3!U ' );
define( 'SECURE_AUTH_SALT', '}}GoBr^VtO`<u/(P!u ;]3w>0}NCia8P-H<TwP[vhfMn:NViaI|~nxTg;_AgJPJJ' );
define( 'LOGGED_IN_SALT',   'V&U:iQ ~s](La*CKjp$eJDi-l3`mlUhnS&l;SYa|R2RcXRLKItTd+@%Ux5d3 AQi' );
define( 'NONCE_SALT',       '70M_vObODG-t~xiu0&>osD~7U%u3qyOK(2_BcNUXMYOXN_)th >A&T1u~-3*A%Z*' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'Cha_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
